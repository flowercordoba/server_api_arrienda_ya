import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { RolesInitializationService } from '@root/shared/core/services/roles.service';
import { AdminRolesResolver } from './resolvers/adminRoles.resolver';
import { AdminRolesService } from './services/adminRoles.service';
import { AdminUserService } from './services/adminUser.service';
import { AdminUserResolver } from './resolvers/adminUser.resolver';

@Module({
  providers: [
    AdminResolver,
    AdminRolesResolver,
    AdminRolesService,
    AdminService,
    RolesInitializationService,
    AdminUserResolver,
    AdminUserService
  ],
})
export class AdminModule {}
