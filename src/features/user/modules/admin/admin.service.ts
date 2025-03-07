import { Injectable } from '@nestjs/common';
import { RolesInitializationService } from '@root/shared/core/services/roles.service';
import { UserService } from '../../user.service';
// 
@Injectable()
export class AdminService {
  constructor(
    private readonly rolesInitService: RolesInitializationService,
    private readonly userService: UserService,
  ) {}

  async assignRoleToUser(userId: string, roleName: string) {
    return this.rolesInitService.assignRoleToUser(userId, roleName);
  }

  async removeRoleFromUser(userId: string, roleName: string) {
    return this.rolesInitService.removeRoleFromUser(userId, roleName);
  }
  async listAllRoles() {
    return this.rolesInitService.listAllRoles();
  }

  async listAllUser() {
    return this.userService.listAllUser();
  }
  

}
