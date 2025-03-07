import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TenentModule } from './modules/tenent/tenent.module';
import { AdminModule } from './modules/admin/admin.module';
import { BusinessModule } from './modules/business/business.module';
import { LandlordModule } from './modules/landlord/landlord.module';
import { UserContractsService } from './services/user-contracts.service';
import { UserContractsResolver } from './resolvers/user-contracts.resolver';

@Module({
  imports:[
    TenentModule,
    // LandlordModule,
    // AdminModule,
    // BusinessModule,
  ],
  providers: [
    UserResolver,
    UserContractsResolver, 
    UserService,
    UserContractsService
  ],
})
export class UserModule {}
