import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Role } from '@root/shared/core/entities/roles.entity';
import { Business } from '../modules/business/entities/business.entity';
import { Landlord } from '../modules/landlord/entities/landlord.entity';
import { Tenant } from '../modules/tenent/entities/tenent.entity';
import { Admin } from '../modules/admin/entities/admin.entity';
import { Property } from '@root/features/properties/entities/property.entity';

@ObjectType()
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id!: string;

  @Column()
  @Field()
  name!: string;

  @Column({ unique: true })
  @Field()
  email!: string;

  @Column()
  password!: string;

  @OneToOne(() => Tenant, (tenant) => tenant.user)
  tenant?: Tenant;

  @OneToOne(() => Landlord, (landlord) => landlord.user)
  landlord?: Landlord;

  @OneToOne(() => Business, (business) => business.user)
  business?: Business;

  @OneToOne(() => Admin, (admin) => admin.user)
  admin?: Admin;

  @Column({ type: 'enum', enum: ['tenant', 'landlord', 'admin', 'business'] })
  @Field()
  primaryRole!: 'tenant' | 'landlord' | 'admin' | 'business';

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  @Field(() => [Role])
  roles: Role[];

  @Field(() => [Property])
  @OneToMany(() => Property, (property) => property.createdBy)
  properties!: Property[];

}
