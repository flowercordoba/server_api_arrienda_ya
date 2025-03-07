import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Category } from '@root/features/category/entities/category.entity';
import { Tag } from '@root/features/tag/entities/tag.entity';
import { User } from '@root/features/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('properties') 
export class Property {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Field({nullable:true})
  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  price!: number;

  @Field({nullable:true})

  @Column({ type: 'varchar', length: 500 })
  location!: string;

  @Field({nullable:true})

  @Column({ type: 'enum', enum: ['available', 'rented', 'sold'], default: 'available' })
  status!: 'available' | 'rented' | 'sold';

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.properties, { nullable: false })
  createdBy!: User;
  @ManyToOne(() => User, (user) => user.properties, { nullable: false })


  @Field(() => [Category])
  @ManyToMany(() => Category, (category) => category.properties)
  @JoinTable({
    name: 'property_categories',
    joinColumn: { name: 'property_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' }
  })
  categories!: Category[];

  @Field(() => [Tag], { nullable: true })
  @ManyToMany(() => Tag, (tag) => tag.properties)
  @JoinTable({
    name: 'property_tags',
    joinColumn: { name: 'property_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' }
  })
  tags?: Tag[];

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;


}
