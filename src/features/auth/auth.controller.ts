import {
  Controller,
  UseGuards,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Req,
  Get,
  SetMetadata,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterTenentDto, RegisterLandlordDto, LoginUserDto, RegisterAdminDto } from './dto';
import { JwtGuard } from './guards/auth.guard';
// import { JwtGuard } from './guards/auth.guard';
// import { RoleGuard } from './guards/role.guard';
import { Request } from 'express';
import { RegisterBusinessDto } from './dto/register-business-auth.dto';
import { RoleGuard } from './guards/role.guard';
import { UserRole } from '@root/shared/enum/roles.enum';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('tenant')
  async RegisterTenent(@Body() registerTenentDto: RegisterTenentDto) {
    try {
      const user =
        await this.authService.handleRegisterTenen(registerTenentDto);
      return {
        message: 'Usuario registrado con éxito',
        user,
      };
    } catch (error) {
      console.error('Error durante el registro de usuario:', error);
      throw new HttpException(
        'Error al registrar usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('leandloard')
  async RegisterLoandLoard(@Body() registerLoandLoardDto: RegisterLandlordDto) {
    try {
      const user = await this.authService.handleRegisterLoanLoard(
        registerLoandLoardDto,
      );
      return {
        message: 'Usuario registrado con éxito',
        user,
      };
    } catch (error) {
      console.error('Error durante el registro de usuario:', error);
      throw new HttpException(
        'Error al registrar usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('admin')
  async RegisterAdmin(@Body() registerAdminDto: RegisterAdminDto) {
    try {
      const user = await this.authService.handleRegisterAdmin(
        registerAdminDto,
      );
      return {
        message: 'Usuario registrado con éxito',
        user,
      };
    } catch (error) {
      console.error('Error durante el registro de usuario:', error);
      throw new HttpException(
        'Error al registrar usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  // @UseGuards(JwtGuard, RoleGuard)
  // @SetMetadata('roles', 'user')
  // @Post('admin')
  // RegisterAdmin(@Body() registerAdminDto: RegisterAdminDto) {
  //   return this.authService.handleRegisterAdmin(registerAdminDto);
  // }

  //
    @UseGuards(JwtGuard, RoleGuard)
   @SetMetadata('roles', UserRole.ADMIN)
  @Post('business')
  async RegisterBusiness(@Body() registerBusinessDto: RegisterBusinessDto) {
    try {
      const user = await this.authService.handleRegisterBusiness(registerBusinessDto);
      return {
        message: 'Usuario Business registrado con éxito',
        user,
      };
    } catch (error) {
      console.error('Error durante el registro de Business:', error);
      throw new HttpException(
        'Error al registrar Business',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  async handleLogin(@Body() loginBody: LoginUserDto) {
    try {
      const data = await this.authService.loginUser(loginBody);
      return {
        message: 'Inicio de sesión exitoso',
        data,
      };
    } catch (error) {
      console.error('Error en el inicio de sesión:', error.message);
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: error.message || 'Error al iniciar sesión',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  @UseGuards(JwtGuard)
  @Get('current-user')
  async currentUser(@Req() req: Request) {
    const user = req.user;
    // console.log('Request', user);
    // console.log('Request user.roles', user.roles);

    if (!user) {
      return { message: 'Usuario no autenticado' };
    }

    // Llamada al servicio para obtener los detalles del usuario
    const userDetails = await this.authService.currentUser(user.id);
    if (!userDetails) {
      return { message: 'Usuario no encontrado' };
    }

    return {
      ...userDetails,
    };
  }
}
