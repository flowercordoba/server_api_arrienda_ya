import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateTagInput {
   @Field()
   @IsString() // Validar que es un string
   @IsNotEmpty() // Validar que no esté vacío
   name!: string;
}
