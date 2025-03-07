import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagInput } from './dto/input/create-tag.input';
import { UpdateTagInput } from './dto/input/update-tag.input';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  // Crear un nuevo tag
  async createTag(input: CreateTagInput): Promise<Tag> {
    // Verificar si la categoría ya existe por el nombre
    const existingTags = await this.tagRepository.findOne({
      where: { name: input.name },
    });
  
    // Si ya existe, lanzar una excepción
    if (existingTags) {
      throw new ConflictException(`La categoría con el nombre "${input.name}" ya existe.`);
    }
  
    // Crear la nueva categoría si no existe
    const newTags = this.tagRepository.create(input);
  
    // Guardar la categoría en la base de datos
    const savedTag = await this.tagRepository.save(newTags);
  
    // Retornar la categoría creada
    return savedTag;
  }

  // Obtener todos los tags
  async getTags(skip = 0, take = 10): Promise<Tag[]> {
    return await this.tagRepository.find({
      skip,
      take,
    });
  }

  // Obtener un tag por ID
  async getTagById(id: string): Promise<Tag | null> {
    return await this.tagRepository.findOneBy({ id });
  }

  // Actualizar un tag existente
  async updateTag(input: UpdateTagInput): Promise<Tag | null> {
    const { id, name } = input;
    const tag = await this.tagRepository.findOneBy({ id });
    if (!tag) {
      throw new Error('Etiqueta no encontrada.');
    }

    if (name) {
      tag.name = name;
    }

    return await this.tagRepository.save(tag);
  }

  // Eliminar un tag por ID
  async deleteTag(id: string): Promise<boolean> {
    const result = await this.tagRepository.delete(id);
    return result.affected === 1;
  }
}
