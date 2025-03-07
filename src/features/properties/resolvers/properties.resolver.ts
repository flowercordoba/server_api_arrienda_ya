import { Resolver } from '@nestjs/graphql';
import { PropertiesService } from '../properties.service';
import { Property } from '../entities/property.entity';

@Resolver(() => Property)
export class PropertiesResolver {
  constructor(private readonly propertiesService: PropertiesService) {}


}
