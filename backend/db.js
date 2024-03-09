const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sakshambharadwaj18:saksham@cluster0.pqnpzs2.mongodb.net/gofood?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true },
        (err, result) => {
            if (err) console.log("---", err)
            else {
                console.log("connected");
                const fetched_data =  mongoose.connection.db.collection("item_food");
                fetched_data.find({}).toArray(function (err, data) {
                    const catagory_food  =  mongoose.connection.db.collection("catagory_food");
                    catagory_food.find({}).toArray(function(err,catData){
                    if (err) {console.log("---", err);}
                    else{
                       global.item_food = data;
                    global.catagory_food = catData;
                    }
                   console.log()})
                })
        }
    })}
module.exports = mongoDB;