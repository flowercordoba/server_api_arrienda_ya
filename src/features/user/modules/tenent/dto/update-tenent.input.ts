import { CreateTenentInput } from './create-tenent.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTenentInput extends PartialType(CreateTenentInput) {
  @Field(() => Int)
  id: number;
}
