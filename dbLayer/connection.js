const mongoose = require('mongoose');
const dbUrl = `${process.env.MONGO_URL}/${process.env.DB_NAME}`;
console.log("URL------>",dbUrl);


const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(dbUrl,{});
        console.info(`Database Connected: ${conn.connection.host}`);
    }catch(err){
        console.error(`Error while connecting to database: ${error.message}`);
        process.exit(1);
    }
};


module.exports = connectDB;