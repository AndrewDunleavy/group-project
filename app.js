const express = require('express')
const app = express()
const PORT = 3000
const noteRoutes = require('./noteRoute')
const cors = require('cors')


app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})

const sequelize = require("./db.js");


async function main() {

    await sequelize.sync()
    console.log("db is ready")


        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } 

app.use('/notes', noteRoutes)

main()

