import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '@root/features/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('landlords')
@ObjectType()
export class Landlord {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id!: string;

  @Field({ nullable: true })  
  @Column({ nullable: true }) // Permitir NULL en la BD si es opcional
  fullName?: string;

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

  // Relación con `Property` (comentado hasta que se necesite)
  // @Field(() => [Property], { nullable: true })
  // @ManyToMany(() => Property, (property) => property.landlords)
  // @JoinTable({
  //   name: 'landlord_properties', // Nombre de la tabla intermedia
  //   joinColumn: { name: 'landlord_id', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'property_id', referencedColumnName: 'id' },
  // })
  // properties?: Property[];

  @Column({ default: true })
  @Field()
  isActive!: boolean; // Define si el Landlord está activo o bloqueado

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  registrationDate!: Date; // Fecha de registro del Landlord

  @Column({ type: 'timestamp', nullable: true })
  @Field({ nullable: true })
  lastLogin?: Date; // Última vez que inició sesión

  @Column({ default: false })
  @Field()
  profileCompleted!: boolean; // Indica si completó su perfil con documentos

  @Column({ nullable: true, type: 'text' })
  @Field({ nullable: true })
  notes?: string; // Observaciones internas del Admin sobre el Landlord

  @Column({ default: false })
  @Field()
  kycVerified!: boolean; // Indica si el Landlord pasó la verificación KYC

  @Column({ nullable: true })
  @Field({ nullable: true })
  kycVerificationDate?: Date; // Fecha en la que el Landlord fue verificado

  @Column({ nullable: true })
  @Field({ nullable: true })
  kycStatus?: string; // Estado de la verificación (Pendiente, Aprobado, Rechazado)

  @Column({ nullable: true, type: 'text' })
  @Field({ nullable: true })
  kycRejectionReason?: string; // Motivo si la verificación KYC fue rechazada

  @Column({ nullable: true })
  @Field({ nullable: true })
  kycDocumentUrl?: string; // URL del documento KYC subido por el Landlord
}
