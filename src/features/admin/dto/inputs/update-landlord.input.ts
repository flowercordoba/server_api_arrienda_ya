import { InputType, PartialType } from '@nestjs/graphql';
import { RegisterLandlordDto } from '@root/features/auth/dto';

@InputType()
export class UpdateLandlordInput extends PartialType(RegisterLandlordDto) {}
