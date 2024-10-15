import { IClient } from "../models/IClient";
import { IClientRepository } from "../repositories/clientRepository";

export class PostgresClienteRepository implements IClientRepository {
  create(client: IClient): IClient {
    console.log(`Metodo Postgres: Creando cliente con los datos: 
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
    console.log(`Metodo Postgres: Actualizando cliente por Id: ${id}`);
    console.log(`Metodo Postgres: Cliente actualizado: ${client}`);
    return client;
  }

  delete(id: string): void {
    console.log(`Metodo Postgres: Eliminando el client con el Id: ${id}`);
  }
}
