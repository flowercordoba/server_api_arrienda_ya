import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class RegisterBusinessDto {
  @IsString()
  @IsNotEmpty()
  readonly businessName: string;

  @IsString()
  @IsNotEmpty()
  readonly ownerName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly phone?: string;

  @IsString()
  @IsOptional()
  readonly website?: string;

  @IsString()
  @IsOptional()
  readonly address?: string;

  @IsString()
  @IsOptional()
  taxId: string;
}

export class UpdateBusinessDto {
  @IsString()
  @IsOptional()
  readonly businessName?: string;

  @IsString()
  @IsOptional()
  readonly ownerName?: string;

  @IsString()
  @IsOptional()
  readonly phone?: string;

  @IsString()
  @IsOptional()
  readonly website?: string;

  @IsString()
  @IsOptional()
  readonly address?: string;
}
