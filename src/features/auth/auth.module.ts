import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { RolesInitializationService } from '@root/shared/core/services/roles.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { envs } from '@root/shared/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService, RolesInitializationService,JwtStrategy],
  exports: [JwtStrategy, PassportModule,AuthService,JwtStrategy],
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          signOptions: { expiresIn: '24h' },
          secret: envs.JWT_ACCESS_TOKEN_SECRET,
        };
      },
    }),
    
    // 

  ],

})
export class AuthModule {}
