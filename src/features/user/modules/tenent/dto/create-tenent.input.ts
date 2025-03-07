import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTenentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
