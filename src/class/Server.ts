import express, { Application } from "express";
import "dotenv/config";

export class Server {
  private readonly app: Application;
  private readonly port: number;
  private readonly host: string;

  constructor() {
    this.app = express();
    this.port = 4000;
    this.host = "localhost";
  }

  public initialization() {
    this.app.listen(this.port, this.host, () => {
      console.log(`Servidor corriendo en: http://${this.host}:${this.port}`);
    });
  }
}
