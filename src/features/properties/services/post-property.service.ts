import { Injectable } from '@nestjs/common';

@Injectable()
export class PostPropertyService {
  async createProperty(): Promise<string> {
    // Este método se encargará de crear una propiedad.
    return 'Crear una nueva propiedad';
  }

  async createMultipleProperties(): Promise<string> {
    // Este método se encargará de crear múltiples propiedades a la vez.
    return 'Crear múltiples propiedades';
  }

  async validateBeforeCreate(): Promise<string> {
    // Este método realiza validaciones antes de crear una propiedad.
    return 'Validación realizada antes de crear una propiedad';
  }
  async addPropertyToFavorites(): Promise<string> {
    // Este método realiza validaciones antes de crear una propiedad.
    return 'addPropertyToFavorites service method invoked';
}
}
