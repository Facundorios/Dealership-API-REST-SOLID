import { IClient } from "../models/IClient";

export interface IClientRepository {
  create(client: IClient): IClient;
  findById(id: string): void;
  update(id: string, client: IClient): IClient;
  delete(id: string): void;
}
