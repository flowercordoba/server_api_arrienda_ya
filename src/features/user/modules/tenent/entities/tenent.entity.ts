import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '@root/features/user/entities/user.entity';
import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('tenants')
export class Tenant {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id!: string;

  @Field()
  @Column()
  fullName!: string;

  @Field()
  @Column()
  phoneNumber!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profilePicture?: string;

  @Field()
  @Column()
  address!: string;

  @Field()
  @Column()
  city!: string;

  @Field()
  @Column()
  country!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  preferredPaymentMethod?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  preferredCurrency?: string;

  // Relación con la tabla `User`
  @Field(() => User)
  @OneToOne(() => User, (user) => user.tenant, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  user!: User;
}
