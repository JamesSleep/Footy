import mongoose from 'mongoose';

const MatchSchema = new mongoose.Schema({
    home_team : {
        type: String,
        required : "홈팀을 입력해주세요"
    },
    away_team : {
        type: String,
        required : "원정팀을 입력해주세요"
    },
    league : {
        type: String,
        required : "리그정보를 입력해주세요"
    },
    round : {
        type: String,
        required : "라운드를 입력하세요"
    },
    year : {
        type: Number,
        required : "연도를 입력해주세요"
    },
    stadium : {
        type : String
    },
    city : {
        type : String
    },
    home_score : {
        type : Number
    },
    away_score : {
        type : Number
    },
    home_scorer : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }],
    away_scorer : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }],
    
    home_players : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }],
    away_players : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }],
    videoUrl: {
        type: String
    },
    imgUrl: {
        type: String
    },
    comments: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    createAt : {
        type : Date,
        default : Date.now
    }
});

const model = mongoose.model("match", MatchSchema);

export default model;