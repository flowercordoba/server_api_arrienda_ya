import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BusinessService } from './business.service';
import { Business } from './entities/business.entity';
import { CreateBusinessInput } from './dto/create-business.input';
import { UpdateBusinessInput } from './dto/update-business.input';

@Resolver(() => Business)
export class BusinessResolver {
  constructor(private readonly businessService: BusinessService) {}

  @Mutation(() => Business)
  createBusiness(@Args('createBusinessInput') createBusinessInput: CreateBusinessInput) {
    return this.businessService.create(createBusinessInput);
  }

  @Query(() => [Business], { name: 'business' })
  findAll() {
    return this.businessService.findAll();
  }

  @Query(() => Business, { name: 'business' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.businessService.findOne(id);
  }

  @Mutation(() => Business)
  updateBusiness(@Args('updateBusinessInput') updateBusinessInput: UpdateBusinessInput) {
    return this.businessService.update(updateBusinessInput.id, updateBusinessInput);
  }

  @Mutation(() => Business)
  removeBusiness(@Args('id', { type: () => Int }) id: number) {
    return this.businessService.remove(id);
  }
}
