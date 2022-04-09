if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require("express");
const mongoose = require('mongoose');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const PORT = process.env.PORT;
const app = express();


mongoose.connect(process.env.MONGODB_URI , {
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

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});