import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, In } from "typeorm";
import { adminPermissions } from "../constants/adminPermissions";
import { businessPermissions } from "../constants/businessPermissions";
import { landlordPermissions } from "../constants/landlordPermissions";
import { permissionAdmin } from "../constants/permissionNames";
import { tenantPermissions } from "../constants/tenantPermissions";
import { Permission } from "../entities/permission.entity";
import { Role } from "../entities/roles.entity";
<<<<<<< Updated upstream
import { User } from "@root/features/user/entities/user.entity";
=======
// import { User } from "@root/features/user/entities/user.entity";
import { UserRole } from "@root/shared/enum/roles.enum";
import { ValidRolesArgs } from "@root/shared/args/roles.args";
>>>>>>> Stashed changes

@Injectable()
export class RolesInitializationService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    @InjectRepository(Permission) private readonly permissionRepository: Repository<Permission>,
    // @InjectRepository(User) private readonly userRepository: Repository<User>,

  ) {}

  async initializeRolesAndPermissions() {
    const allPermissions = [
      ...permissionAdmin,
      ...tenantPermissions,
      ...landlordPermissions,
      ...businessPermissions,
    ];

    for (const permissionName of allPermissions) {
      let permission = await this.permissionRepository.findOne({ where: { name: permissionName } });
      if (!permission) {
        permission = this.permissionRepository.create({ name: permissionName });
        await this.permissionRepository.save(permission);
      }
    }

    await this.createRole('tenant', tenantPermissions);
    await this.createRole('landlord', landlordPermissions);
    await this.createRole('admin', adminPermissions);
    await this.createRole('business', businessPermissions);
  }

  public async createRole(roleName: string, permissionNames: string[]) {
    let role = await this.roleRepository.findOne({ where: { name: roleName }, relations: ['permissions'] });
    if (!role) {
      role = this.roleRepository.create({ name: roleName });
    }

    const permissions = await this.permissionRepository.find({ where: { name: In(permissionNames) } });
    role.permissions = permissions;
    await this.roleRepository.save(role);
  }

   // Listar todos los roles
   async listAllRoles(): Promise<Role[]> {
    return this.roleRepository.find({ relations: ['permissions'] });
  }

  // // Editar un rol
  // async updateRole(id: string, newName: string, permissionNames: string[]): Promise<Role> {
  //   const role = await this.roleRepository.findOne({ where: { id }, relations: ['permissions'] });
  //   if (!role) {
  //     throw new NotFoundException('Role not found');
  //   }

  //   const permissions = await this.permissionRepository.find({
  //     where: { name: In(permissionNames) },
  //   });

  //   role.name = newName;
  //   role.permissions = permissions;

  //   return this.roleRepository.save(role);
  // }

  // // Eliminar un rol
  // async deleteRole(id: string): Promise<void> {
  //   const role = await this.roleRepository.findOne({ where: { id } });
  //   if (!role) {
  //     throw new NotFoundException('Role not found');
  //   }

  //   await this.roleRepository.delete(id);
  // }

  //   // Asignar un rol a un usuario
  //   async assignRoleToUser(userId: string, roleName: string): Promise<User> {
  //     const user = await this.userRepository.findOne({
  //       where: { id: userId },
  //       relations: ['roles'],
  //     });
  //     if (!user) {
  //       throw new NotFoundException('User not found');
  //     }
  
  //     const role = await this.roleRepository.findOne({ where: { name: roleName } });
  //     if (!role) {
  //       throw new NotFoundException('Role not found');
  //     }
  
  //     if (user.roles.some((existingRole) => existingRole.id === role.id)) {
  //       throw new BadRequestException('User already has this role');
  //     }
  
  //     user.roles.push(role);
  //     return this.userRepository.save(user);
  //   }
  //    // Quitar un rol de un usuario
  // async removeRoleFromUser(userId: string, roleName: string): Promise<User> {
  //   const user = await this.userRepository.findOne({
  //     where: { id: userId },
  //     relations: ['roles'],
  //   });
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }

  //   const role = user.roles.find((existingRole) => existingRole.name === roleName);
  //   if (!role) {
  //     throw new BadRequestException('User does not have this role');
  //   }

  //   user.roles = user.roles.filter((existingRole) => existingRole.id !== role.id);
  //   return this.userRepository.save(user);
  // }

}
