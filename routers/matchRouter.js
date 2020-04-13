import express from 'express';
import routes from '../routes';
import { 
    matches, matchDetail, addMatch, editMatch 
} from '../controllers/matchController';

const matchRouter = express.Router();

matchRouter.get(routes.matches, matches);
matchRouter.get(routes.matchDetail, matchDetail);
matchRouter.get(routes.addMatch, addMatch);
matchRouter.get(routes.editMatch, editMatch);

export default matchRouter;