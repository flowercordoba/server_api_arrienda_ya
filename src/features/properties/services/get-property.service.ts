import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPropertyService {
  async getAllProperties(): Promise<string> {
    // Este método se encargará de obtener todas las propiedades.
    return 'Obtener todas las propiedades';
  }

  async getPropertyById(): Promise<string> {
    // Este método se encargará de obtener una propiedad específica por ID.
    return 'Obtener una propiedad por ID';
  }

  async searchProperties(): Promise<string> {
    // Este método realizará búsquedas avanzadas de propiedades.
    return 'Buscar propiedades con filtros';
  }

  async getUserProperties(): Promise<string> {
    // Este método obtendrá todas las propiedades de un usuario.
    return 'Obtener propiedades de un usuario';
  }

  async getFavoriteProperties(): Promise<string> {
    // Este método obtendrá todas las propiedades de un usuario.
    return 'Obtener propiedades de un usuario favorites';
  }
}
