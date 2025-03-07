import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterAdminDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
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
  position: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  department: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  privilegesLevel?: string; 
}
