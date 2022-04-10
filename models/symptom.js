const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const symptomSchema = new Schema({
    name:{
       type: String,
       required: true, 
    }
});

module.exports = mongoose.model('Symptom', symptomSchema);