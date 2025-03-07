import { Resolver, Mutation } from '@nestjs/graphql';
import { PostPropertyService } from '../services/post-property.service';
import { Req, SetMetadata, UseGuards } from '@nestjs/common';
import { JwtGuard } from '@root/features/auth/guards/auth.guard';
import { RoleGuard } from '@root/features/auth/guards/role.guard';
import { UserRole } from '@root/shared/enum/roles.enum';
import { Property } from '../entities/property.entity';
import { Request } from 'express';

@UseGuards(JwtGuard, RoleGuard)
@SetMetadata('roles', UserRole.LANDLORD)
@Resolver(() => Property)  
export class PostPropertyResolver {
  constructor(private readonly postPropertyService: PostPropertyService) {}

  @Mutation(() => String, { name: 'createProperty' })
  async createProperty(@Req() req: Request): Promise<string>  {
    const user = req.user;
    console.log('Request', user);
    console.log('Request user.roles', user.roles);
    return this.postPropertyService.createProperty();
  }

  @Mutation(() => String, { name: 'createMultipleProperties' })
  async createMultipleProperties(): Promise<string> {
    return this.postPropertyService.createMultipleProperties();
  }

  @Mutation(() => String, { name: 'validateBeforeCreate' })
  async validateBeforeCreate(): Promise<string> {
    return this.postPropertyService.validateBeforeCreate();
  }
}
