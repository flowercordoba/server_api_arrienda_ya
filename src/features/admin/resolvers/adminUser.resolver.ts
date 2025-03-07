import { Resolver, Query } from '@nestjs/graphql';
import { User } from '@root/features/user/entities/user.entity';
import { AdminUserService } from '../services/adminUser.service';

@Resolver(() => User)  
export class AdminUserResolver {
  constructor(private readonly adminUserService: AdminUserService) {}

  @Query(() => [User], { name: 'user' })
  listAllRoles() {
    return this.adminUserService.findAllUser();
  }
}
