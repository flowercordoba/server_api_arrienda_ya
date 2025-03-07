import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import {
  RegisterTenentDto,
  RegisterLandlordDto,
  LoginUserDto,
  RegisterAdminDto,
} from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { Role } from '@root/shared/core/entities/roles.entity';
import { compareHash, generateHash } from '@root/shared/utils/handleBycrip';
import { UserRole } from '@root/shared/enum/roles.enum';
import { Landlord } from '../user/modules/landlord/entities/landlord.entity';
import { Admin } from '../user/modules/admin/entities/admin.entity';
import { Tenant } from '../user/modules/tenent/entities/tenent.entity';
import { Business } from '../user/modules/business/entities/business.entity';
import { RegisterBusinessDto } from './dto/register-business-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Landlord)
    private readonly landlordRepository: Repository<Landlord>,
    @InjectRepository(Tenant)
    private readonly tenantRepository: Repository<Tenant>,

    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,

    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    private readonly jwtService: JwtService,
  ) {}

  public async handleRegisterAdmin(registerAdminDto: RegisterAdminDto) {
    const userExist = await this.userRepository.findOne({
      where: { email: registerAdminDto.email },
    });
    if (userExist) {
      throw new BadRequestException('El email ya está en uso.');
    }

    try {
      const hashedPassword = await generateHash(registerAdminDto.password);

      let role = await this.roleRepository.findOne({
        where: { name: UserRole.ADMIN },
      });
      if (!role) {
        role = this.roleRepository.create({ name: UserRole.ADMIN });
        await this.roleRepository.save(role);
      }

      const newUser = this.userRepository.create({
        name: registerAdminDto.fullName,
        email: registerAdminDto.email,
        password: hashedPassword,
        primaryRole: UserRole.ADMIN,
        roles: [role],
      });

      const savedUser = await this.userRepository.save(newUser);

      const newAdmin = this.adminRepository.create({
        fullName: registerAdminDto.fullName,
        phoneNumber: registerAdminDto.phoneNumber,
        email: registerAdminDto.email,
        position: registerAdminDto.position,
        department: registerAdminDto.department,
        privilegesLevel: registerAdminDto.privilegesLevel || 'default',
        user: savedUser,
      });

      await this.adminRepository.save(newAdmin);

      return { message: 'Admin registrado con éxito', user: savedUser };
    } catch (error) {
      console.error('Error en handleRegisterAdmin:', error);
      throw new HttpException(
        'Error al registrar admin',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async handleRegisterTenen(registerTenanDto: RegisterTenentDto) {
    const userExist = await this.userRepository.findOne({
      where: { email: registerTenanDto.email },
    });

    if (userExist) {
      throw new BadRequestException('El email ya está en uso.');
    }

    try {
      // if (!registerTenanDto.fullName) {
      //   throw new BadRequestException(
      //     'El campo fullName es obligatorio y no puede ser nulo.',
      //   );
      // }

      const hashedPassword = await generateHash(registerTenanDto.password);

      // Verificar si el rol "tenant" existe, si no, lo crea
      let role = await this.roleRepository.findOne({
        where: { name: UserRole.TENANT },
      });
      if (!role) {
        role = this.roleRepository.create({ name: UserRole.TENANT });
        await this.roleRepository.save(role);
      }

      const newUser = this.userRepository.create({
        name: registerTenanDto.fullName,
        email: registerTenanDto.email,
        password: hashedPassword,
        primaryRole: UserRole.TENANT,
        roles: [role],
      });

      const savedUser = await this.userRepository.save(newUser);
      // Crear un registro en la entidad Tenant
      const newTenant = this.tenantRepository.create({
        fullName: registerTenanDto.fullName,
        phoneNumber: registerTenanDto.phoneNumber,
        address: registerTenanDto.address,
        city: registerTenanDto.city,
        country: registerTenanDto.country,
        preferredPaymentMethod: registerTenanDto.preferredPaymentMethod,
        preferredCurrency: registerTenanDto.preferredCurrency,
        user: savedUser,
      });

      await this.tenantRepository.save(newTenant);
      return { message: 'Tenant registrado con éxito', user: savedUser };
    } catch (error) {
      console.error('Error en handleRegisterTenen:', error);
      throw new HttpException(
        'Error al registrar tenant',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async handleRegisterLoanLoard(
    registerLoandLoardDto: RegisterLandlordDto,
  ) {
    const userExist = await this.userRepository.findOne({
      where: { email: registerLoandLoardDto.email },
    });

    if (userExist) {
      throw new BadRequestException('El email ya está en uso.');
    }

    try {
      // if (!registerLoandLoardDto.fullName) {
      //   throw new BadRequestException(
      //     'El campo fullName es obligatorio y no puede ser nulo.',
      //   );
      // }
      const hashedPassword = await generateHash(registerLoandLoardDto.password);

      let role = await this.roleRepository.findOne({
        where: { name: UserRole.LANDLORD },
      });
      if (!role) {
        role = this.roleRepository.create({ name: UserRole.LANDLORD });
        await this.roleRepository.save(role);
      }

      const newUser = this.userRepository.create({
        name: registerLoandLoardDto.fullName,
        email: registerLoandLoardDto.email,
        password: hashedPassword,
        primaryRole: UserRole.LANDLORD,
        roles: [role],
      });

      const savedUser = await this.userRepository.save(newUser);
      const newLandlord = this.landlordRepository.create({
        fullName: registerLoandLoardDto.fullName,
        phoneNumber: registerLoandLoardDto.phoneNumber,
        email: registerLoandLoardDto.email,
        profilePicture: registerLoandLoardDto.profilePicture,
        companyName: registerLoandLoardDto.companyName,
        companyAddress: registerLoandLoardDto.companyAddress,
        taxId: registerLoandLoardDto.taxId,
        idDocument: registerLoandLoardDto.idDocument,
        proofOfOwnership: registerLoandLoardDto.proofOfOwnership,
        address: registerLoandLoardDto.address,
        city: registerLoandLoardDto.city,
        country: registerLoandLoardDto.country,
        preferredPaymentMethod: registerLoandLoardDto.preferredPaymentMethod,
        preferredCurrency: registerLoandLoardDto.preferredCurrency,
        user: savedUser,
      });

      await this.landlordRepository.save(newLandlord);
      return { message: 'Landlord registrado con éxito', user: savedUser };
    } catch (error) {
      console.error('Error en handleRegisterLoanLoard:', error);
      throw new HttpException(
        'Error al registrar landlord',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  public async handleRegisterBusiness(
    registerBusinessDto: RegisterBusinessDto,
  ) {
    const userExist = await this.userRepository.findOne({
      where: { email: registerBusinessDto.email },
    });

    if (userExist) {
      throw new BadRequestException('El email ya está en uso.');
    }

    try {
      if (!registerBusinessDto.businessName) {
        throw new BadRequestException('El campo businessName es obligatorio.');
      }

      // Encriptar la contraseña
      const hashedPassword = await generateHash(registerBusinessDto.password);

      // Verificar si el rol "business" existe, si no, lo crea
      let role = await this.roleRepository.findOne({
        where: { name: UserRole.BUSINESS },
      });
      if (!role) {
        role = this.roleRepository.create({ name: UserRole.BUSINESS });
        await this.roleRepository.save(role);
      }

      // Crear usuario asociado al negocio
      const newUser = this.userRepository.create({
        name: registerBusinessDto.ownerName,
        email: registerBusinessDto.email,
        password: hashedPassword,
        primaryRole: 'business',
        roles: [role],
      });

      const savedUser = await this.userRepository.save(newUser);
      const newBusiness = this.businessRepository.create({
        businessName: registerBusinessDto.businessName,
        taxId: registerBusinessDto.taxId,
        phone: registerBusinessDto.phone,
        website: registerBusinessDto.website,
        address: registerBusinessDto.address,
        user: savedUser,
      });

      await this.businessRepository.save(newBusiness);
      return { message: 'Business registrado con éxito', user: savedUser };
    } catch (error) {
      console.error('Error en handleRegisterBusiness:', error);
      throw new HttpException(
        'Error al registrar business',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //
  async loginUser(userLoginBody: LoginUserDto) {
    try {
      const { password, email } = userLoginBody;
      console.log('Datos recibidos en loginUser:', userLoginBody);

      // Buscar el usuario por email, incluyendo los roles y permisos
      const userExist = await this.userRepository.findOne({
        where: { email },
        relations: ['roles', 'roles.permissions'],
      });

      if (!userExist) {
        console.log('Usuario no encontrado para el email:', email);
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }

      console.log('Usuario encontrado:', userExist);

      // Verificar la contraseña
      const isCheck = await compareHash(password, userExist.password);
      if (!isCheck) {
        console.log('Contraseña incorrecta para el usuario:', email);
        throw new HttpException('Contraseña incorrecta', HttpStatus.FORBIDDEN);
      }

      console.log('Contraseña verificada correctamente.');

      // Preparar el payload para el token
      const payload = { id: userExist.id, name: userExist.name };
      const token = this.jwtService.sign(payload);

      console.log('JWT generado:', token);

      const data = {
        token,
        id: userExist.id,
        email: userExist.email,
        roles: userExist.roles.map((role) => ({
          name: role.name,
          permissions: role.permissions.map((permission) => permission.name),
        })),
      };

      console.log('Datos devueltos en el login:', data);

      return data;
    } catch (error) {
      console.error('Error en loginUser:', error.message);
      throw new HttpException(
        error.message || 'Error en el servidor al iniciar sesión',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async currentUser(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['roles', 'roles.permissions'],
    });

    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
