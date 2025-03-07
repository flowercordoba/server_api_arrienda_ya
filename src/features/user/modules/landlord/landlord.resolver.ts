import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LandlordService } from './landlord.service';
import { Landlord } from './entities/landlord.entity';
import { CreateLandlordInput } from './dto/create-landlord.input';
import { UpdateLandlordInput } from './dto/update-landlord.input';

@Resolver(() => Landlord)
export class LandlordResolver {
  constructor(private readonly landlordService: LandlordService) {}

  @Mutation(() => Landlord)
  createLandlord(@Args('createLandlordInput') createLandlordInput: CreateLandlordInput) {
    return this.landlordService.create(createLandlordInput);
  }

  @Query(() => [Landlord], { name: 'landlord' })
  findAll() {
    return this.landlordService.findAll();
  }

  @Query(() => Landlord, { name: 'landlord' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.landlordService.findOne(id);
  }

  @Mutation(() => Landlord)
  updateLandlord(@Args('updateLandlordInput') updateLandlordInput: UpdateLandlordInput) {
    return this.landlordService.update(updateLandlordInput.id, updateLandlordInput);
  }

  @Mutation(() => Landlord)
  removeLandlord(@Args('id', { type: () => Int }) id: number) {
    return this.landlordService.remove(id);
  }
}
