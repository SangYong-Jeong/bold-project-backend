const mongoose = require('mongoose');
const { Schema } = mongoose;

const SrcSchema = new Schema({
  id: Number,
  src: String,
  rep: { type: Boolean, default: false },
});

const PackageSchema = new Schema({
  title: String,
  content: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  imgs: [SrcSchema],
  user: {
    _id: mongoose.Types.ObjectId,
    userid: String,
  },
});

const Package = mongoose.model('Package', PackageSchema);

module.exports = Package;
