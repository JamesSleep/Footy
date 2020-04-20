import express from 'express';
import routes from '../routes';
import { 
    matches,  
    getAddMatch,
    postAddMatch,
    getEditMatch,
    postEditMatch,
    matchDetail
} from '../controllers/matchController';
import { addMatchMiddleWare } from '../middleWare';

const matchRouter = express.Router();

matchRouter.get(routes.addMatch, getAddMatch);
matchRouter.post(routes.addMatch, addMatchMiddleWare, postAddMatch);
matchRouter.get(routes.matchDetail(), matchDetail);
matchRouter.get(routes.editMatch(), getEditMatch);
matchRouter.post(routes.editMatch(), postEditMatch);

export default matchRouter;