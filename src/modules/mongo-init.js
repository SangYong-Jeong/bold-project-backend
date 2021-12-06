const mongoose = require('mongoose');
// const dummyCreator = require('../dummyData');

module.exports = async function main(MONGO_URI) {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
    // dummyCreator();
  } catch (err) {
    console.log(err);
  }
};
