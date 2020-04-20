import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    text : {
        type:String,
        required:"내용을 입력해주세요"
    },
    score : {
        type:Number,
        required:"평점을 입력해주세요"
    },
    createAt : {
        type : Date,
        default : Date.now
    }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;