import { registerEnumType } from "@nestjs/graphql";

export enum UserRole {
  LANDLORD = 'landlord',
  TENANT = 'tenant',
  ADMIN = 'admin',
  BUSINESS = 'business'
}

registerEnumType(UserRole,{name:"validRoles",description:"estos son los roles permitodos para la plataforma"})