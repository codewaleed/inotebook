const mongoose = require('mongoose');
const NoteSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: 'general'
    }
});

module.exports = mongoose.model('note', NoteSchema)