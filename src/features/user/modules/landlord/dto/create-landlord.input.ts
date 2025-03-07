import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLandlordInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
