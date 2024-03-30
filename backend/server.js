const mongoose = require('mongoose');

const config = require('dotenv').config();
const MONGO_URI= process.env.MONGO_URL;

const mongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");
        
        const fetch_data = await mongoose.connection.db.collection('food_items');
        const data = await fetch_data.find({}).toArray();
        if (data.length > 0) {
            global.food_items = data;
        } else {
            console.log("No data found in collection 'food_items'");
        }

        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();
        global.foodCategory = catData;
    } catch (error) {
        console.error("Error in connecting DB:", error);
    } finally {
        // Optionally close the connection
        // mongoose.connection.close();
    }
};

module.exports = mongoDB;
