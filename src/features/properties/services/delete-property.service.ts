import { Injectable } from '@nestjs/common';

@Injectable()
export class DeletePropertyService {
  async deletePropertyById(): Promise<string> {
    // Este método se encargará de eliminar una propiedad por su ID.
    return 'Eliminar una propiedad por ID';
  }

  async deleteMultipleProperties(): Promise<string> {
    // Este método se encargará de eliminar múltiples propiedades.
    return 'Eliminar múltiples propiedades';
  }

  async deletePropertiesByFilter(): Promise<string> {
    // Este método eliminará propiedades que cumplan con ciertos criterios.
    return 'Eliminar propiedades por filtro';
  }

  async removePropertyFromFavorites(): Promise<string> {
    // Este método eliminará propiedades que cumplan con ciertos criterios.
    return 'removePropertyFromFavorites service method invoked';
}
}
