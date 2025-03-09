import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FeaturesModule } from './features/feature.module';
import { SharedModule } from './shared/shared.module';
@Module({
  imports: [SharedModule, FeaturesModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
