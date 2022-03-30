const express = require('express')
const app = express()
const PORT = 3000



app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})

const sequelize = require("./db.js");
const Note = require('./notes.js');

async function main() {

    await sequelize.sync()
    console.log("db is ready")

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
app.post('/notes', async (req, res) => {
    await Note.create(req.body)
    res.send("note has beeen added")
})


app.get('/notes', async (req, res) => {
    const notes = await Note.findAll();
    res.send(notes);
})

app.get('/notes/:id', async (req, res) => {
    const requestedId = req.params.id
    const note = await Note.findOne({ where: { id: requestedId } })
    res.send(note)
})

app.put('/notes/:id', async (req, res) => {
    const requestedId = req.params.id
    const note = await Note.findOne({ where: { id: requestedId } })
    note.name = req.body.name
    note.info = req.body.info
    await note.Save()
    res.send("note updated")
})
app.delete('/notes/:id', async (req, res) => {
    const requestedId = req.params.id
    await Note.destroy({where : {id : requestedId}})
    res.send("note deleted")
})

main()

