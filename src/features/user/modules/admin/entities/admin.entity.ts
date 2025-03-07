import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '@root/features/user/entities/user.entity';

@ObjectType()
@Entity('admins')
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id!: string;



  @Column()
  @Field()
  privilegesLevel!: string;

  @Field()
  @Column()
  fullName!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phoneNumber?: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @Column()
  position!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  department?: string;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.admin, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  user!: User;
}


