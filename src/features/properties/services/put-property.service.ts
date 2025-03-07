import { Injectable } from '@nestjs/common';

@Injectable()
export class PutPropertyService {
  async updateProperty(): Promise<string> {
    // Este método se encargará de actualizar los datos de una propiedad.
    return 'Actualizar datos de una propiedad';
  }

  async changePropertyStatus(): Promise<string> {
    // Este método se encargará de cambiar el estado de una propiedad.
    return 'Cambiar el estado de una propiedad';
  }

  async updateMultipleProperties(): Promise<string> {
    // Este método se encargará de actualizar múltiples propiedades.
    return 'Actualizar múltiples propiedades';
  }
}
