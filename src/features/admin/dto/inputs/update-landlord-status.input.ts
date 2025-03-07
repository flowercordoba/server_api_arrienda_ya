import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateLandlordStatusInput {
  @Field()
  isActive: boolean;
}
