import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/input/create-category.input';
import { UpdateCategoryInput } from './dto/input/update-category.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

 // Crear una nueva categoría
 @Mutation(() => Category)
 async createCategory(@Args('input') input: CreateCategoryInput): Promise<Category> {
   return this.categoryService.createCategory(input);
 }


  // Obtener todas las categorías
  @Query(() => [Category])
  async getCategories(
    @Args('skip', { type: () => Number, nullable: true }) skip = 0,
    @Args('take', { type: () => Number, nullable: true }) take = 10,
  ): Promise<Category[]> {
    return this.categoryService.getCategories(skip, take);
  }


 // Obtener una categoría por ID
 @Query(() => Category, { nullable: true })
 async getCategoryById(@Args('id') id: string): Promise<Category | null> {
   return this.categoryService.getCategoryById(id);
 }
 // Actualizar una categoría existente
 @Mutation(() => Category, { nullable: true })
 async updateCategory(@Args('input') input: UpdateCategoryInput): Promise<Category | null> {
   return this.categoryService.updateCategory(input);
 }


   // Eliminar una categoría por ID
   @Mutation(() => Boolean)
   async deleteCategory(@Args('id') id: string): Promise<boolean> {
     return this.categoryService.deleteCategory(id);
   }
}
