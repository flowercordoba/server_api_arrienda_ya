/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { DeletePropertyService } from '../services/delete-property.service';

@Resolver()
export class DeletePropertyResolver {
  constructor(private readonly deletePropertyService: DeletePropertyService) {}

  @Mutation(() => String, { name: 'deletePropertyById' })
  async deletePropertyById(@Args('id') id: string): Promise<string> {
    return this.deletePropertyService.deletePropertyById();
  }

  @Mutation(() => String, { name: 'deleteMultipleProperties' })
  async deleteMultipleProperties(): Promise<string> {
    return this.deletePropertyService.deleteMultipleProperties();
  }

  @Mutation(() => String, { name: 'deletePropertiesByFilter' })
  async deletePropertiesByFilter(@Args('filter') filter: string): Promise<string> {
    return this.deletePropertyService.deletePropertiesByFilter();
  }
}
