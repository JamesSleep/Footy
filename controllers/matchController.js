import routes from "../routes";
import Match from "../models/Match";

export const home = async(req, res) => {
    try {
        const matches = await Match.find({}).sort({_id:-1});
        res.render("home",{matches});
    } catch(error) {
        console.log(error);
        res.render("home",{matches : []});
    }
}
export const search = async (req, res) => {
    const {
        query: {term : searchingBy}
    } = req;
    let matches = [];
    try {
        matches = await Match.find({
            $or : [
                {home_team: {$regex:searchingBy, $options : "i"}},
                {away_team: {$regex:searchingBy, $options : "i"}}
            ]
        });
    } catch (error) {
        console.log(error);
    }
    res.render("search", {searchingBy, matches});
}
export const getAddMatch = (req, res) => 
    res.render("addMatch");
export const postAddMatch = async(req, res) => {
    const {
        body: { home_team, away_team, league, round, 
        year, home_score, away_score ,city, stadium, videoUrl},
    } = req;
    const imgUrl = 
        req.files.imgFile === undefined ?
        "No Image" : req.files.imgFile[0].path;
    const newMatch = await Match.create({
        videoUrl, imgUrl ,
        home_team, away_team, league, round,
        year, home_score, away_score,city, stadium
    });
    res.redirect(routes.matchDetail(newMatch.id));
}
export const matchDetail = async(req, res) => {
    const {
        params : {id}
    } = req;
    try {
        const match = await Match.findById(id);
        res.render("matchDetail", {match});
    } catch (error) {
        res.redirect(routes.home);
    }
}
export const getEditMatch = async(req, res) => {
    const {
        params : {id}
    } = req;
    try {
        const match = await Match.findById(id);
        res.render("editMatch", {match});
    } catch (error) {
        res.redirect(routes.home);
    }
}
export const postEditMatch = async(req, res) => {
    const {
        params : {id},
        body : {
            videoUrl, imgUrl ,
            home_team, away_team, league, round,
            year, home_score, away_score,city, stadium
        }
    } = req;
    try {
        await Match.findOneAndUpdate({_id:id}, 
            {   videoUrl, imgUrl ,
                home_team, away_team, league, round,
                year, home_score, away_score,city, stadium});
        res.redirect(routes.matchDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
}
    
