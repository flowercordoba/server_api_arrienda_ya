import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import {
  DeletePropertyService,
  PostPropertyResolver,
  GetPropertyService,
  PostPropertyService,
  PutPropertyService,
  DeletePropertyResolver,
  GetPropertyResolver,
  PutPropertyResolver,
  PropertiesResolver
} from '.';

@Module({
  providers: [
    PostPropertyResolver,
    PropertiesResolver,
    DeletePropertyResolver,
    GetPropertyResolver,
    PutPropertyResolver,

    PropertiesService,
    DeletePropertyService,
    
    GetPropertyService,
    PostPropertyService,
    PutPropertyService,
  ],
})
export class PropertiesModule {}
