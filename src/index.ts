console.log('Hello Typescript!');

import {App} from './app';
import {DatabaseConnection} from './database';
import {Database} from '../config/dbconfig';
import dotenv from 'dotenv';
dotenv.config();

const db = new Database();


// connect to database
const dbConnection = new DatabaseConnection(db.MONGODB_URL);
dbConnection.connect();

// create app and start server
const app = new App();
app.start();