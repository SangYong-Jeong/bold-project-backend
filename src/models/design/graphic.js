const mongoose = require('mongoose');
const { Schema } = mongoose;

const SrcSchema = new Schema({
  id: mongoose.Types.ObjectId,
  src: String,
  rep: { type: Boolean, default: false },
});

const GraphicSchema = new Schema({
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

const Graphic = mongoose.model('Graphic', GraphicSchema);

module.exports = Graphic;
