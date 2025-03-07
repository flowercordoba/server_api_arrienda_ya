import { Injectable } from '@nestjs/common';

import { RolesInitializationService } from '@root/shared/core/services/roles.service';
import { Role } from '@root/shared/core/entities/roles.entity';

@Injectable()
export class AdminRolesService {
  constructor(
    private readonly rolesInitializationService: RolesInitializationService,
  ) {}

  async findAllAllRoles(): Promise<Role[]> {
    return this.rolesInitializationService.listAllRoles();
  }

  // Crear un nuevo rol
  async createRole(name: string, permissionNames: string[]) {
    return this.rolesInitializationService.createRole(name, permissionNames);
  }

  // Editar un rol existente
  async updateRole(id: string, name: string, permissionNames: string[]) {
    return this.rolesInitializationService.updateRole(
      id,
      name,
      permissionNames,
    );
  }

  // Eliminar un rol
  async removeRole(id: string) {
    return this.rolesInitializationService.deleteRole(id);
  }

  // Asignar un rol a un usuario
  async assignRoleToUser(userId: string, roleName: string) {
    return this.rolesInitializationService.assignRoleToUser(userId, roleName);
  }

  // Quitar un rol de un usuario
  async removeRoleFromUser(userId: string, roleName: string) {
    return this.rolesInitializationService.removeRoleFromUser(userId, roleName);
  }
}
