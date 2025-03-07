import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetCategoriesArgs {
  @Field(() => Int, { nullable: true })
  skip?: number; // Paginación: Saltar un número de registros

  @Field(() => Int, { nullable: true })
  take?: number; // Paginación: Límite de registros

  @Field({ nullable: true })
  name?: string; // Filtro por nombre de categoría
}
