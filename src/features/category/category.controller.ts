import { Controller, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/input/create-category.input';

@Controller('category') // Ruta base para este controlador
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create') // Endpoint: POST /category/create
  async createCategory(@Body() input: CreateCategoryInput) {
    console.log('Input recibido en el controlador:', input); // Log para depuración
    const category = await this.categoryService.createCategory(input);
    console.log('Categoría creada desde el servicio:', category); // Log del resultado
    return category;
  }
}
