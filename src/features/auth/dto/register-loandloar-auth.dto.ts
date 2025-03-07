import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterLandlordDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;

//   @Field({ nullable: true })
//   @IsOptional()
//   @IsPhoneNumber(null) // Valida un número telefónico basado en la región, null significa cualquier región
//   phoneNumber?: string;
@IsString()
@IsOptional()
phoneNumber?: string;


  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  profilePicture?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  companyName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  companyAddress?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  taxId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  idDocument?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  proofOfOwnership?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  city: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  country: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  preferredPaymentMethod?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  preferredCurrency?: string;
}
