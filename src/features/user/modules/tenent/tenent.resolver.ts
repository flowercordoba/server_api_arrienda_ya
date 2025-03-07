import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TenentService } from './tenent.service';
import { Tenant } from './entities/tenent.entity';
import { CreateTenentInput } from './dto/create-tenent.input';
import { UpdateTenentInput } from './dto/update-tenent.input';

@Resolver(() => Tenant)
export class TenentResolver {
  constructor(private readonly tenentService: TenentService) {}

  @Mutation(() => Tenant)
  createTenent(@Args('createTenentInput') createTenentInput: CreateTenentInput) {
    return this.tenentService.create(createTenentInput);
  }

  @Query(() => [Tenant], { name: 'tenent' })
  findAll() {
    return this.tenentService.findAll();
  }

  @Query(() => Tenant, { name: 'tenent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tenentService.findOne(id);
  }

  @Mutation(() => Tenant)
  updateTenent(@Args('updateTenentInput') updateTenentInput: UpdateTenentInput) {
    return this.tenentService.update(updateTenentInput.id, updateTenentInput);
  }

  @Mutation(() => Tenant)
  removeTenent(@Args('id', { type: () => Int }) id: number) {
    return this.tenentService.remove(id);
  }
}
