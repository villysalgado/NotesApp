const { Router } = require('express');
const router = Router();

const {getNotes, updateNotes, createNote, deleteNotes, getNote} = require('../controllers/notes.controller');
 

router.route('/')
    .get(getNotes)
    .post(createNote)


router.route('/:id')
    .get(getNote)
    .put(updateNotes)
    .delete(deleteNotes)

module.exports = router;