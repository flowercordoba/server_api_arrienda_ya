import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { RolesInitializationService } from '@root/shared/core/services/roles.service';
import { UserService } from '../../user.service';

@Module({
  providers: [AdminResolver, AdminService,RolesInitializationService,UserService],
})
export class AdminModule {}
