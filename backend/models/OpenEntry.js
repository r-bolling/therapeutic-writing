const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OpenEntrySchema = new Schema({
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

module.exports = OpenEntry = mongoose.model("openentry", OpenEntrySchema)
