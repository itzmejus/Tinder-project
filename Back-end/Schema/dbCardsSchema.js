import mongoose from 'mongoose';
const cardSchemma=mongoose.Schema({
    name:String,
    imgUrl:String
})

export default mongoose.model('cards',cardSchemma);