const mongoose = require('mongoose');
const { Schema } = mongoose;

const SrcSchema = new Schema({
  id: Number,
  src: String,
  rep: { type: Boolean, default: false },
});

const PackageSchema = new Schema({
  number: Number,
  title: String,
  content: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  imgs: [SrcSchema],
});

const Package = mongoose.model('Package', PackageSchema);

module.exports = Package;
