require('dotenv').config();
const jwt = require('jsonwebtoken')

conexion = {
    abrir: async (cookies) => {
        const Sequelize = require('sequelize')
        var sequelize;

        const data = jwt.verify(cookies, process.env.JWT_SECRET)
        if (data.rol == "tecnico") {
            sequelize = new Sequelize('cruzroja', process.env.MYSQL_USER, process.env.MYSQL_PASS, {
                host: 'localhost',
                dialect: 'mysql',
                port: 3306
            })
        } else {
            sequelize = new Sequelize('cruzroja', process.env.MYSQL_USER_VOLUNTEER, process.env.MYSQL_PASS_VOLUNTEER, {
                host: 'localhost',
                dialect: 'mysql',
                port: 3306
            })
        }f

        await sequelize.authenticate()
            .then(() => {
                console.log("Abierta Sequelize")
            })


        return sequelize;

    },
    cerrar: async con => {
        await con.close();
        console.log("Cerrada Sequelize");
    }
}


module.exports = conexion;