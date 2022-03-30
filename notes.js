const {Model , DataTypes} = require("sequelize")
const sequelize = require("./db")

class Note extends Model {}

Note.init({
    name : {
        type : DataTypes.STRING
    }, 
    info : {
        type : DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'names'
})

module.exports = Note;