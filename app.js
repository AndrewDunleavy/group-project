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
const Name = require('./name');

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
//Name.create

main()
