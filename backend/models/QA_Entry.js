const mongoose = require("mongoose")
const Schema = mongoose.Schema

const QA_EntrySchema = new Schema({
  title: {
    type: String,
  },
  question: {
    type: String,
  },
  answerBody: {
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

module.exports = QA_Entry = mongoose.model("qaentry", QA_EntrySchema)
