import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FeaturesModule } from './features/feature.module';
import { SharedModule } from './shared/shared.module';
import { RolesInitializationService } from './shared/core/services/roles.service';
@Module({
  imports: [SharedModule, FeaturesModule],
  controllers: [],
  providers: [AppService, RolesInitializationService],
})
export class AppModule {
  constructor(private readonly rolesInitService: RolesInitializationService) {
    this.rolesInitService.initializeRolesAndPermissions();
  }
}
