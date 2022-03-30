const {Model , DataTypes} = require("sequelize")
const sequelize = require("./db")

class Name extends Model {}

Name.init({
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

module.exports = Name;