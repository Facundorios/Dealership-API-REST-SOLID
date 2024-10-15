import { IVehicle } from "../models/IVehicle";
import { IVehicleRepository } from "../repositories/vehicleRepository";

export class VehicleMongoRepository implements IVehicleRepository {
  create(vehicle: IVehicle): IVehicle {
    console.log(`Metodo Mongo: Creando vehiculo con los datos: 
        ${vehicle.name}
        ${vehicle.model}
        ${vehicle.price}
        ${vehicle.year}`);
    return vehicle;
  }
  findById(id: string): IVehicle | null {
    console.log(`Buscando vehiculo por el id ${id}`);
    return null;
  }
  update(id: string, vehicle: IVehicle): IVehicle {
    console.log(`Metodo Mongo: Actualizando vehiculo por Id: ${id}`);
    console.log(`Metodo Mongo: Vehiculo actualizado: ${vehicle}`);
    return vehicle;
  }
  delete(id: string): void {
    console.log(`Metodo Mongo: Eliminando el vehiculo con el Id: ${id}`);
  }
}
