import { Resolver, Query} from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';

import { Role } from '@root/shared/core/entities/roles.entity';
import { User } from '../../entities/user.entity';

@Resolver(() => Admin)
export class AdminResolver {

  constructor(
    private readonly adminService: AdminService
  ) {}
  @Query(() => [Role])
  async listAllRoles(): Promise<Role[]> {
    return this.adminService.listAllRoles();
  }
  @Query(() => [User])
  async listAllUsers(): Promise<User[]> {
    return this.adminService.listAllUser();
  }

  // @Mutation(() => Admin)
  // createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
  //   return this.adminService.create(createAdminInput);
  // }

  // @Query(() => [Admin], { name: 'admin' })
  // findAll() {
  //   return this.adminService.findAll();
  // }

  // @Query(() => Admin, { name: 'admin' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.adminService.findOne(id);
  // }

  // @Mutation(() => Admin)
  // updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
  //   return this.adminService.update(updateAdminInput.id, updateAdminInput);
  // }

  // @Mutation(() => Admin)
  // removeAdmin(@Args('id', { type: () => Int }) id: number) {
  //   return this.adminService.remove(id);
  // }
}
