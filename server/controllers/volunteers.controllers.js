const Volunteer = require("../models/volunteers.model")
const conexion = require("../database/mysql")
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
require('dotenv').config();


const volunteer = {
    /**
     * Inserta en las bases de datos (MySQL) los datos del usuario.
     * @param {JSON} req 
     * @param {JSON} res 
     */
    register: async (req, res) => {
        const con = await conexion.abrir(req.cookies.session);
        try {
            const { first_name, last_name, email, phone_number, birth_date, pass, location, postal_code, availability, studies, car, rol, volunteer_since } = req.body;
            const volunt = await Volunteer.create(con);
            const pass_hash = bcrypt.hashSync(pass, 8);
            const newvolunteer = await volunt.create({ first_name, last_name, email, phone_number, birth_date, pass: pass_hash, location, postal_code, availability, studies, car, rol, volunteer_since });
            const data = newvolunteer.dataValues
            res.json(data)
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Actualiza los datos del usuario.
     * @param {JSON} req 
     * @param {JSON} res 
     */
    update: async (req, res) => {
        const con = await conexion.abrir(req.cookies.session);
        try {
            const { email, phone_number, location, posta_code, interests, health_issues, car, id } = req.body;
            const volunt = await volunteers.create(con);
            const setter = await volunt.update({ email, phone_number, location, posta_code, interests, health_issues, car }, { where: { id } });
            res.json(setter)
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Responde con los datos guardados en MySQL filtrando por la ID.
     * @param {JSON} req 
     * @param {JSON} res 
     */
    getvolunteerData: async (req, res) => {
        const con = await conexion.abrir(req.cookies.session);
        try {
            const volunt = await Volunteer.create(con);
            res.json(await volunt.findByPk(req.params.id))
        } catch (error) {
            res.send(error)
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Login de voluntario y técnico
     * @param {*} req 
     * @param {*} res 
     */
    login: async (req, res) => {
        const con = await conexion.abrir("login");
        try {
            const { email, pass } = req.body;
            const volunt = await Volunteer.create(con);
            const voluntFinded = await volunt.findOne({ where: { email } });
            if (voluntFinded) {
                let hashSaved = voluntFinded.dataValues.pass;
                //Compara la contraseña guardada desencriptandola con la introducida en el formulario.
                let compare = bcrypt.compareSync(pass, hashSaved);
                const data = voluntFinded.dataValues
                const infoJwt = jwt.sign({ data }, process.env.JWT_SECRET);
                if (compare) {
                    res.cookie("session", infoJwt)
                    res.json(true)
                } else {
                    res.json(false)
                }
            } else {
                res.json(false);
            }
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },
}

module.exports = volunteer