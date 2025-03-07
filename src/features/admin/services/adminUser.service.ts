import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@root/features/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAllUser(): Promise<User[]> {
    return this.userRepository.find({})
  }

}
