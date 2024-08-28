import mongoose from "mongoose";
const movieSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
   genre:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
})

export const Movie=mongoose.model('movies',movieSchema);
