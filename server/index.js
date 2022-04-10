// if (process.env.NODE_ENV !== "production") {

// }

require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
// const PORT = process.env.PORT;
const app = express();
const PORT= 3001;
const MONGODB_URI = "mongodb+srv://goal:goal@goaldiggers.n6ogv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const router = express.Router();

const {
    symptomDetails,
    getSymptoms

} = require('../controllers/sypmtoms.js')


mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err)
    });



app.post("/symptoms",getSymptoms);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
