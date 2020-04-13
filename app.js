import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import matchRouter from './routers/matchRouter';
import playerRouter from './routers/playerRouter';
import routes from './routes';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.matches,matchRouter);
app.use(routes.players,playerRouter);

export default app;
