const notesCtrl = {};

const Note = require('../models/note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}
notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote =new Note({
        title,
        content, 
        date, 
        author
    });
    await newNote.save();
    res.json({message:'Note Saved'});
}
notesCtrl.getNote = async(req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}
notesCtrl.updateNotes = async(req, res) => {
    const { title, content, date, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        content
    });   
    res.json({message:'Note Updated'});
}
notesCtrl.deleteNotes = async(req, res) => {
    await Note.findOneAndDelete(req.params.id);
    res.json({message:'Note Deleted'});
}
module.exports = notesCtrl