import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTagInput } from './dto/input/create-tag.input';
import { UpdateTagInput } from './dto/input/update-tag.input';
import { Tag } from './entities/tag.entity';
import { TagService } from './tag.service';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  // Crear un nuevo tag
  @Mutation(() => Tag)
  async createTag(@Args('input') input: CreateTagInput): Promise<Tag> {
    return this.tagService.createTag(input);
  }

  // Obtener todos los tags
  @Query(() => [Tag])
  async getTags(
    @Args('skip', { type: () => Number, nullable: true }) skip = 0,
    @Args('take', { type: () => Number, nullable: true }) take = 10,
  ): Promise<Tag[]> {
    return this.tagService.getTags(skip, take);
  }

  // Obtener un tag por ID
  @Query(() => Tag, { nullable: true })
  async getTagById(@Args('id') id: string): Promise<Tag | null> {
    return this.tagService.getTagById(id);
  }

  // Actualizar un tag existente
  @Mutation(() => Tag, { nullable: true })
  async updateTag(@Args('input') input: UpdateTagInput): Promise<Tag | null> {
    return this.tagService.updateTag(input);
  }

  // Eliminar un tag por ID
  @Mutation(() => Boolean)
  async deleteTag(@Args('id') id: string): Promise<boolean> {
    return this.tagService.deleteTag(id);
  }
}
