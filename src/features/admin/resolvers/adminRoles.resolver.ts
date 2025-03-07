import { Resolver, Query } from '@nestjs/graphql';
import { Role } from '@root/shared/core/entities/roles.entity';
import { AdminRolesService } from '../services/adminRoles.service';

@Resolver(() => Role)  // 🔹 Cambié Roles a Role
export class AdminRolesResolver {
  constructor(private readonly adminRolesService: AdminRolesService) {}

  @Query(() => [Role], { name: 'roles' })
  listAllRoles() {
    return this.adminRolesService.findAllAllRoles();
  }
}
