import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '@root/features/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity('landlords')
@ObjectType()
export class Landlord {
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

  @Field({ nullable: true })
  @Column({ nullable: true })
  companyName?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  companyAddress?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  taxId?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  idDocument?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  proofOfOwnership?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  address?: string;

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

  @Field()
  @Column({ unique: true })
  email!: string;

    // Relación con la tabla `User`
    @Field(() => User)
    @OneToOne(() => User, (user) => user.landlord, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    user!: User;

    // @Field(() => [Property], { nullable: true })
    // @ManyToMany(() => Property, (property) => property.landlords)
    // @JoinTable({
    //   name: 'landlord_properties', // Nombre de la tabla intermedia
    //   joinColumn: { name: 'landlord_id', referencedColumnName: 'id' },
    //   inverseJoinColumn: { name: 'property_id', referencedColumnName: 'id' },
    // })
    // properties?: Property[];
}
