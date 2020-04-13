import express from 'express';
import routes from '../routes';
import { 
    players, playerDetail, addPlayer, editPlayer 
} from '../controllers/playerController';

const playerRouter = express.Router();

playerRouter.get(routes.players, players);
playerRouter.get(routes.playerDetail, playerDetail);
playerRouter.get(routes.addPlayer, addPlayer);
playerRouter.get(routes.editPlayer, editPlayer);

export default playerRouter;