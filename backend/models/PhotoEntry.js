const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PhotoEntrySchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
  },
})

module.exports = PhotoEntry = mongoose.model("photoentry", PhotoEntrySchema)
