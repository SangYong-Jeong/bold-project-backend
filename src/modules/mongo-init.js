const mongoose = require('mongoose');

module.exports = async function main(MONGO_URI) {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
};
