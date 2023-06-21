import express from 'express';
import cors from "cors";
import usersRoutes from './routes/users.routes';
import morgan from "morgan";
import config from './config';


const app = express();

//settings
app.set('port', config.port)

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api",usersRoutes)


export default app