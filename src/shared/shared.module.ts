import { Module } from '@nestjs/common';
import { AppGraphQLModule } from './modules/graphql/graphql.module';
import { PgModule } from './modules/pg/pg.module';

@Module({
  imports: [
  
    AppGraphQLModule,
    PgModule,
  ],
})
export class SharedModule {}
