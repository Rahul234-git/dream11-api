const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamASchema = new Schema({
    "_id":{
        type:String,
        required:true
    },
    "logo_url":{
        type:String,
        required:true
    },
    "name":{
        type:String,
        required:true
    },
    "overs":{
        type:String,
        required:true
    },
    "scores":{
        type:String,
        required:true
    },
    "scores_full":{
        type:String,
        required:true
    },
    "short_name":{
        type:String,
        required:true
    },
    "team_id":{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("teamADataHandel",TeamASchema,"teamA");