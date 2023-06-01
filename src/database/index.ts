import mongoose from "mongoose";

export class DatabaseConnection {
  private mongodb_url: string;

  constructor(mongodb_url: string) {
    this.mongodb_url = mongodb_url;
  }

  public connect(): void {
    mongoose.connect(this.mongodb_url);

    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });

    mongoose.connection.on("error", (err: any) => {
        console.log("Database error: " + err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Database disconnected");
    });
  }
}
