import { CreateLandlordInput } from './create-landlord.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLandlordInput extends PartialType(CreateLandlordInput) {
  @Field(() => Int)
  id: number;
}
