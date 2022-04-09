const csvtojson = require('csvtojson');
const mongodb = require('mongodb');
const fileName = 'A(0-24983).csv';
var arrayToInsert = [];
csvtojson().fromFile(fileName).then(source => {
    // Fetching the all data from each row
    for (var i = 0; i < source.length; i++) {
         var oneRow = {
             name: source[i]['name'],
             company: source[i]['company'],
                discounted_price: source[i]['discounted_price'],
             mrp: source[i]['mrp'],
         };
         arrayToInsert.push(oneRow);
     }
     //inserting into the table “employees”
    //  var collectionName = '';
    //  var collection = dbConn.collection(collectionName);
    //  collection.insertMany(arrayToInsert, (err, result) => {
    //      if (err) console.log(err);
    //      if(result){
    //          console.log('Import CSV into database successfully.');
    //      }
    //  });
});

const a = new mongoose.Schema({
    STUID: String,
    srno: Number,
    RN: Number,
    Name: String,
    P1A1: Number,
    P2A1: Number,
    P1A2: Number,
    P2A2: Number,
    P3A1: Number,
    P3A2: Number,
    TA1: Number,
    TA2: Number,
    OUTOF: Number,
    FinalTOT: Number,
});
const A = mongoose.model('A', a);
module.exports = A;