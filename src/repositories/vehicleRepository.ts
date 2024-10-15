import { IVehicle } from "../models/IVehicle";

export interface IVehicleRepository {
  create(vehicle: IVehicle): IVehicle;
  findById(id: string, vehicle: IVehicle): IVehicle | null;
  update(id: string, vehicle: IVehicle): IVehicle;
  delete(id: string): void;
}
