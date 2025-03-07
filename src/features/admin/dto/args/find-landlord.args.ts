import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class FindLandlordArgs {
  @Field({ nullable: true })
  isActive?: boolean;

  @Field({ nullable: true })
  kycVerified?: boolean;
}
