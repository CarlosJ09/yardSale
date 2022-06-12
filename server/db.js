const mongoose = require('mongoose');
DB = "mongodb+srv://CarlosJ09:Carlos942003@firstcluster.shofzna.mongodb.net/YardSale";

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try{
        mongoose.connect(DB, connectionParams);
        console.log('Connected to database succesfully');
    }catch(error){
        console.log(error)
        console.log("Could not connected to database");
    }
}