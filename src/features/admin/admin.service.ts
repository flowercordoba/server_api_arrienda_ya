import { Injectable } from '@nestjs/common';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesInitializationService } from '@root/shared/core/services/roles.service';
import { Role } from '@root/shared/core/entities/roles.entity';

@Injectable()
export class AdminService {
  constructor(
    private readonly rolesInitializationService: RolesInitializationService,
    // @InjectRepository(User)
    // private readonly userRepository: Repository<User>,
  ) {}
    create(createAdminInput: CreateAdminInput) {
    return 'This action adds a new admin';
  }

  async findAllAllRoles(): Promise<Role[]> {
    return this.rolesInitializationService.listAllRoles();
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminInput: UpdateAdminInput) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }

   // Crear un nuevo rol
   async createRole(name: string, permissionNames: string[]) {
    return this.rolesInitializationService.createRole(name, permissionNames);
  }

  // Editar un rol existente
  async updateRole(id: string, name: string, permissionNames: string[]) {
    return this.rolesInitializationService.updateRole(id, name, permissionNames);
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
