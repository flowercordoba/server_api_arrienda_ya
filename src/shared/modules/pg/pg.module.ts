import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '@root/features/category/entities/category.entity';
import { Property } from '@root/features/properties/entities/property.entity';
import { Tag } from '@root/features/tag/entities/tag.entity';
import { User } from '@root/features/user/entities/user.entity';
import { Admin } from '@root/features/user/modules/admin/entities/admin.entity';
import { Business } from '@root/features/user/modules/business/entities/business.entity';
import { Landlord } from '@root/features/user/modules/landlord/entities/landlord.entity';
import { Tenant } from '@root/features/user/modules/tenent/entities/tenent.entity';
import { envs } from '@root/shared/config';
import { Permission } from '@root/shared/core/entities/permission.entity';
import { Role } from '@root/shared/core/entities/roles.entity';

// import { ElasticsearchService } from '../elastisc/elasticsearch.service';
// import { KibanaService } from '../elastisc/kibana.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envs.DATABASE_HOST,
      port: envs.DATABASE_PORT,
      username: envs.DATABASE_USERNAME,
      password: envs.DATABASE_PASSWORD,
      database: envs.DATABASE_NAME,
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false,
      },
      // extra: {
      //   max: 10,
      //   connectionTimeoutMillis: 2000,
      //   idleTimeoutMillis: 30000,
      // },
    }),

    TypeOrmModule.forFeature([
      Role,
      Permission,
      User,
      Admin,
      Tenant,
      Business,
      Landlord,
      Property,
      Tag,
      Category
    ]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class PgModule {}
