import dotenv from 'dotenv';
dotenv.config();


export class Database{
    public MONGODB_URL: string;

    constructor(){
        this.MONGODB_URL = process.env.MONGODB_URL!  ;
    }
}