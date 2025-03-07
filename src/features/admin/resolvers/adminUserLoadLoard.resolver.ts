import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AdminUserLoandLordService } from '../services/adminLoandLord.service';
import { Landlord } from '@root/features/user/modules/landlord/entities/landlord.entity';
import { UpdateLandlordStatusInput } from '../dto/inputs/update-landlord-status.input';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver(() => Landlord)
export class AdminUserLonadLoardResolver {
  constructor(private readonly adminUserLandlordService: AdminUserLoandLordService) {}

  @Query(() => [Landlord])
  listAllUserLoandLord() {
    return this.adminUserLandlordService.findAllUserLoandLoard();
  }
  @Query(() => Landlord)
  async findOneUserLandlord(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Landlord> {
    return this.adminUserLandlordService.findOneUserLandlord(id);
  }

@Mutation(() => Landlord)
async toggleLandlordStatus(@Args('id', { type: () => String }) id: string): Promise<Landlord> {
    try {
        console.log(`Mutación toggleLandlordStatus llamada con ID: ${id}`);
        return this.adminUserLandlordService.toggleLandlordStatus(id);
    } catch (error) {
        console.error(`Error en Resolver toggleLandlordStatus: ${error.message}`);
        throw new HttpException(error.message || 'Error en la mutación de GraphQL', HttpStatus.INTERNAL_SERVER_ERROR);
    }
}


  
  
}
