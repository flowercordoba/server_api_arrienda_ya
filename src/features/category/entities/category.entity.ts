import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Property } from '@root/features/properties/entities/property.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('categories') 
export class Category {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field({nullable:true})
  @Column({ type: 'varchar', length: 255 })
  name!: string;
    @Field(() => [Property])
    @ManyToMany(() => Property, (property) => property.tags)
    properties!: Property[];

}
