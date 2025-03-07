import { Resolver, Mutation } from '@nestjs/graphql';
import { PostPropertyService } from '../services/post-property.service';


@Resolver()
export class PostPropertyResolver {
  constructor(private readonly postPropertyService: PostPropertyService) {}

  @Mutation(() => String, { name: 'createProperty' })
  async createProperty(): Promise<string> {
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
