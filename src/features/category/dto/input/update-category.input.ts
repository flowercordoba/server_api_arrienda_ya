import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category.input';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => ID)
  id!: string; 

  @Field({ nullable: true })
  name?: string; 
}
