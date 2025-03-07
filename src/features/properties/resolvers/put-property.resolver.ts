/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PutPropertyService } from '../services/put-property.service';

@Resolver()
export class PutPropertyResolver {
  constructor(private readonly putPropertyService: PutPropertyService) {}

  @Mutation(() => String, { name: 'updateProperty' })
  async updateProperty(@Args('id') id: string): Promise<string> {
    return this.putPropertyService.updateProperty();
  }

  @Mutation(() => String, { name: 'changePropertyStatus' })
  async changePropertyStatus(@Args('id') id: string, @Args('status') status: string): Promise<string> {
    return this.putPropertyService.changePropertyStatus();
  }

  @Mutation(() => String, { name: 'updateMultipleProperties' })
  async updateMultipleProperties(): Promise<string> {
    return this.putPropertyService.updateMultipleProperties();
  }
}
