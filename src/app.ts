import express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

// import routes 
import AuthRouter from './routes/AuthRoute';




export class App {
    private app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.errorHandler();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cookieParser());
        this.app.use(compression());
        this.app.use(cors({
            origin: '*',
            credentials: true
        }));
    }

    private routes(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Hello World!');
        });

        this.app.use('/', AuthRouter);

        this.app.get('*' || '/*/*', (req: Request, res: Response) => {
            res.status(404).send('Not Found');
        });
    }

    private errorHandler(): void {
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            res.status(500);
            console.log(err);
            res.end(err.message);
        });
    }

    public start(): void {
        this.app.listen(3000, () => console.log('Server started at http://localhost:3000'));
    }
};