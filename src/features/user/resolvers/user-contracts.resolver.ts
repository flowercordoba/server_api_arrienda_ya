import { Resolver } from '@nestjs/graphql';
import { UserContractsService } from '../services/user-contracts.service';

@Resolver()
export class UserContractsResolver {
  constructor(private readonly userContractsService: UserContractsService) {}

}
