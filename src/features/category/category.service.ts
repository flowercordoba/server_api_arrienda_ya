import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/input/create-category.input';
import { UpdateCategoryInput } from './dto/input/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}


  async createCategory(input: CreateCategoryInput): Promise<Category> {
    // Verificar si la categoría ya existe por el nombre
    const existingCategory = await this.categoryRepository.findOne({
      where: { name: input.name },
    });
  
    // Si ya existe, lanzar una excepción
    if (existingCategory) {
      throw new ConflictException(`La categoría con el nombre "${input.name}" ya existe.`);
    }
  
    // Crear la nueva categoría si no existe
    const newCategory = this.categoryRepository.create(input);
  
    // Guardar la categoría en la base de datos
    const savedCategory = await this.categoryRepository.save(newCategory);
  
    // Retornar la categoría creada
    return savedCategory;
  }
  
  // Obtener todas las categorías
  async getCategories(skip = 0, take = 10): Promise<Category[]> {
    return await this.categoryRepository.find({
      skip,
      take,
    });
  }

  // Obtener una categoría por ID
  async getCategoryById(id: string): Promise<Category | null> {
    return await this.categoryRepository.findOneBy({ id });
  }

  // Actualizar una categoría existente
  async updateCategory(input: UpdateCategoryInput): Promise<Category | null> {
    const { id, name } = input;
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new Error('Categoría no encontrada.');
    }

    if (name) {
      category.name = name;
    }

    return await this.categoryRepository.save(category);
  }

  // Eliminar una categoría por ID
  async deleteCategory(id: string): Promise<boolean> {
    const result = await this.categoryRepository.delete(id);
    return result.affected === 1;
  }
}
