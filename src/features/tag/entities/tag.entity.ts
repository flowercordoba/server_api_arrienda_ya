import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Property } from '@root/features/properties/entities/property.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@ObjectType()
@Entity('tags')

export class Tag {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Field(() => [Property])
  @ManyToMany(() => Property, (property) => property.tags)
  properties!: Property[];
}
