const express = require('express')
const router = express.Router()
const Note = require('./notes.js');

router.route('/')

.post( async (req, res) => {
    await Note.create(req.body)
    res.send("note has beeen added")
})


.get( async (req, res) => {
    const notes = await Note.findAll();
    res.send(notes);
})

router.route('/:id')
.get( async (req, res) => {
    const requestedId = req.params.id
    const note = await Note.findOne({ where: { id: requestedId } })
    res.send(note)
})

.put( async (req, res) => {
    const requestedId = req.params.id
    const note = await Note.findOne({ where: { id: requestedId } })
    note.name = req.body.name
    note.info = req.body.info
    await note.save()
    res.send("note updated")
})
.delete( async (req, res) => {
    const requestedId = req.params.id
    await Note.destroy({where : {id : requestedId}})
    res.send("note deleted")
})

module.exports = router