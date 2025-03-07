import { IsNotEmpty, IsOptional, IsString, IsEmail } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterTenentDto {
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

  @Field()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  address: string;

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
