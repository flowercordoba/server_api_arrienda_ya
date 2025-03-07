/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Args } from '@nestjs/graphql';
import { GetPropertyService } from '../services/get-property.service';

@Resolver()
export class GetPropertyResolver {
  constructor(private readonly getPropertyService: GetPropertyService) {}

  @Query(() => String, { name: 'getAllProperties' })
  async getAllProperties(): Promise<string> {
    return this.getPropertyService.getAllProperties();
  }

  @Query(() => String, { name: 'getPropertyById' })
  async getPropertyById(@Args('id') id: string): Promise<string> {
    return this.getPropertyService.getPropertyById();
  }

  @Query(() => String, { name: 'searchProperties' })
  async searchProperties(@Args('filters') filters: string): Promise<string> {
    return this.getPropertyService.searchProperties();
  }

  @Query(() => String, { name: 'getUserProperties' })
  async getUserProperties(@Args('userId') userId: string): Promise<string> {
    return this.getPropertyService.getUserProperties();
  }
}
