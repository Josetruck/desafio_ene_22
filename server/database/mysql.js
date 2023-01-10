require('dotenv').config();

conexion = {
    abrir: async () => {
        const Sequelize = require('sequelize')

        const sequelize = new Sequelize('cruzroja', process.env.MYSQL_USER, process.env.MYSQL_PASS, {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        })

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