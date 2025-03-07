import { Injectable } from '@nestjs/common';
import { CreateLandlordInput } from './dto/create-landlord.input';
import { UpdateLandlordInput } from './dto/update-landlord.input';

@Injectable()
export class LandlordService {
  create(createLandlordInput: CreateLandlordInput) {
    return 'This action adds a new landlord';
  }

  findAll() {
    return `This action returns all landlord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} landlord`;
  }

  update(id: number, updateLandlordInput: UpdateLandlordInput) {
    return `This action updates a #${id} landlord`;
  }

  remove(id: number) {
    return `This action removes a #${id} landlord`;
  }
}
