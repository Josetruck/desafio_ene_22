require('dotenv').config();
const jwt = require('jsonwebtoken')

conexion = {
    abrir: async (cookies) => {
        const Sequelize = require('sequelize')
        var sequelize;
        var data;
        if(cookies != "login"){
             data = jwt.verify(cookies, process.env.JWT_SECRET)
        } else {
            data = {data:{rol:cookies}}
        }
        if (data.data.rol == "tecnico") {
            console.log("Conectado como tecnico")
            sequelize = new Sequelize('cruzroja', process.env.MYSQL_USER, process.env.MYSQL_PASS, {
                host: 'localhost',
                dialect: 'mysql',
                port: 3306
            })
        } else {
            console.log("Conectado como voluntario")
            sequelize = new Sequelize('cruzroja', process.env.MYSQL_USER_VOLUNTEER, process.env.MYSQL_PASS_VOLUNTEER, {
                host: 'localhost',
                dialect: 'mysql',
                port: 3306
            })
        }

        await sequelize.authenticate()
            .then(() => {
                console.log("Abierta Sequelize")
            })


        return sequelize;

    },
    cerrar: async (con) => {
        await con.close();
        console.log("Cerrada Sequelize");
    }
}


module.exports = conexion;