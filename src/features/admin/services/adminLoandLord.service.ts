import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Landlord } from '@root/features/user/modules/landlord/entities/landlord.entity';
import { Repository } from 'typeorm';
import { UpdateLandlordInput } from '../dto/inputs/update-landlord.input';
import { UpdateLandlordStatusInput } from '../dto/inputs/update-landlord-status.input';

@Injectable()
export class AdminUserLoandLordService {
  constructor(
    @InjectRepository(Landlord)
    private readonly landlordRepository: Repository<Landlord>,
  ) {}

  async findAllUserLoandLoard(): Promise<Landlord[]> {
    return this.landlordRepository.find({
        relations: ['user', 'user.roles', 'user.roles.permissions'], 
    });
}

  async findOneUserLandlord(id: string): Promise<Landlord> {
    const landlord = await this.landlordRepository.findOne({
      where: { id },
    });

    if (!landlord) {
      throw new NotFoundException(
        `No se encontró un Landlord con el ID: ${id}`,
      );
    }

    return landlord;
  }

async toggleLandlordStatus(id: string): Promise<Landlord> {
  try {
      console.log(`Buscando Landlord con ID: ${id}`);

      // Buscar al Landlord en la base de datos
      const landlord = await this.landlordRepository.findOne({ where: { id } });

      if (!landlord) {
          console.error(`Landlord con ID ${id} no encontrado.`);
          throw new NotFoundException(`No se encontró un Landlord con el ID: ${id}`);
      }

      // Invertir el estado actual
      landlord.isActive = !landlord.isActive;
      console.log(`Nuevo estado del Landlord (${id}): ${landlord.isActive}`);

      // Guardar el cambio en la base de datos
      await this.landlordRepository.save(landlord);

      console.log(`Estado del Landlord actualizado correctamente.`);

      // Retornar el Landlord actualizado
      return this.landlordRepository.findOne({ where: { id } });
  } catch (error) {
      console.error(`Error en toggleLandlordStatus: ${error.message}`);
      throw new HttpException(error.message || 'Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}




}
