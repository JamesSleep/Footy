import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
    player_name : {
        type:String,
        required:"선수명을 입력해주세요"
    },
    back_number : {
        type : Number,
        required:"등번호를 입력해주세요"
    }
});

const model = mongoose.model("Player", PlayerSchema);
export default model;