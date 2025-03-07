import { Module } from '@nestjs/common';
import { TenentService } from './tenent.service';
import { TenentResolver } from './tenent.resolver';

@Module({
  providers: [TenentResolver, TenentService],
})
export class TenentModule {}
