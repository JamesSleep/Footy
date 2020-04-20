import multer from "multer";
import routes from "./routes";

const multerMatch = multer({dest:"uploads/matches/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "MAESTRO";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id : 1
    }
    next();
};

export const addMatchMiddleWare = multerMatch.fields([
    {name:"videoFile"}, {name:"imgFile"}
]);
