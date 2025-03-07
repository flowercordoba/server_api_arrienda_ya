import { Injectable } from '@nestjs/common';
import { CreateTenentInput } from './dto/create-tenent.input';
import { UpdateTenentInput } from './dto/update-tenent.input';

@Injectable()
export class TenentService {
  create(createTenentInput: CreateTenentInput) {
    return 'This action adds a new tenent';
  }

  findAll() {
    return `This action returns all tenent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenent`;
  }

  update(id: number, updateTenentInput: UpdateTenentInput) {
    return `This action updates a #${id} tenent`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenent`;
  }
}
