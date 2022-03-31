<<<<<<< HEAD
const express = require('express')
const app = express()
const PORT = 3000
const noteRoutes = require('./noteRoute')
const cors = require('cors')


app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
=======
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const noteRoutes = require("./noteRoute");

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/notes", noteRoutes);
>>>>>>> 716b9eb052c11a9e3808d78f70b5b38e9561defd
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

const sequelize = require("./db.js");

async function main() {
<<<<<<< HEAD

    await sequelize.sync()
    console.log("db is ready")


        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } 

app.use('/notes', noteRoutes)

main()
=======
  await sequelize.sync();
  console.log("db is ready");

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
>>>>>>> 716b9eb052c11a9e3808d78f70b5b38e9561defd

main();
