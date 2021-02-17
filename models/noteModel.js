const mongoose = require('mongoose')

const notesSchema = {
    title: String,
    text: String
}

const Note = mongoose.model('Note', notesSchema)

module.exports = Note;