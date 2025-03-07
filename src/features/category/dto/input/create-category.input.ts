import { IsString, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  @IsString() // Validar que es un string
  @IsNotEmpty() // Validar que no esté vacío
  name!: string;
}
