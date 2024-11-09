

const mongoose = require("mongoose");

const mongoURI = "mongodb://mahitha:mahitha@ac-m8lciiu-shard-00-00.zaaw7e6.mongodb.net:27017,ac-m8lciiu-shard-00-01.zaaw7e6.mongodb.net:27017,ac-m8lciiu-shard-00-02.zaaw7e6.mongodb.net:27017/mernmeats?ssl=true&replicaSet=atlas-tn7oqa-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {useNewUrlParser: true});
    console.log('Connected to MongoDB');
    
    const fetched_data = mongoose.connection.db.collection("food_items");
    global.food_items = await fetched_data.find({}).toArray();
    // console.log(global.food_items)
    const fetched_categories = mongoose.connection.db.collection("foodCategory");
    global.foodCategory = await fetched_categories.find({}).toArray();
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB;

