import { IClient } from "../models/IClient";
import { IClientRepository } from "../repositories/clientRepository";

export class MongoRepository implements IClientRepository {
  create(client: IClient): IClient {
    console.log(`Metodo Mongo: Creando cliente con los datos: 
        ${client.name}
        ${client.email}
        ${client.phone}`);
    return client;
  }

  findById(id: string, client: IClient): IClient {
    console.log(`Buscando cliente por el id ${id}`);
    return client;
  }

  update(id: string, client: IClient): IClient {
    console.log(`Metodo Mongo: Actualizando cliente por Id: ${id}`);
    console.log(`Metodo Mongo: Cliente actualizado: ${client}`);
    return client;
  }
  delete(id: string): void {
    console.log(`Metodo Mongo: Eliminando el client con el Id: ${id}`);
  }
}
