import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '@root/features/user/entities/user.entity';

@ObjectType()
@Entity('businesses')
export class Business {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id!: string;

  @Column()
  @Field()
  businessName!: string; // 🔹 Asegurar que este campo existe en la entidad

  @Column()
  @Field()
  taxId!: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  website?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  address?: string;

  @OneToOne(() => User, (user) => user.business, { cascade: true, onDelete: 'CASCADE' }) 
  @JoinColumn()
  user!: User;
}
