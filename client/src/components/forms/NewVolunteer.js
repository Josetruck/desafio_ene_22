import { useEffect, useState } from "react";
import HeadTitle from "../HeadTitle";
import NavBar from "../NavBar"

function NewVolunteer() {

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [birth_date, setBirth_date] = useState("")
    const [location, setLocation] = useState("")
    const [postal_code, setPostal_code] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [pass2, setPass2] = useState("")
    const [availability, setAvailability] = useState("")
    const [studies, setStudies] = useState("")
    const [car, setCar] = useState("")

    const handleSubmit = () => {

    }

    const checkCarSi = () => {
        const carNo = document.getElementById("car-no")
            carNo.checked = false
            setCar(true)
    }
    const checkCarNo = () => {
        const carSi = document.getElementById("car-si")
            carSi.checked = false
            setCar(false)
    }

    return (<div className="NewUser">
        <HeadTitle title="Formulario voluntaria/os" />
        <div className="form">
            <div className="form-group">
                <label className="">Nombre</label>
                <input type="text" onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Apellidos</label>
                <input type="text" onChange={(e) => setLast_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Fecha de nacimiento</label>
                <input type="date" onChange={(e) => setBirth_date(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Dirección</label>
                <input type="text" onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Código postal</label>
                <input type="number" onChange={(e) => setPostal_code(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Teléfono</label>
                <input type="text" onChange={(e) => setPhone_number(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Contraseña</label>
                <input type="password" onChange={(e) => setPass(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Repetir contraseña</label>
                <input type="password" onChange={(e) => setPass2(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Disponibilidad</label>
                <select onChange={(e) => setAvailability(e.target.value)}>
                    <option value="workdays" key="1">Diario</option>
                    <option value="weekends" key="2">Fin de semana</option>
                </select>
            </div>
            <div className="form-group">
                <label className="">Estudios</label>
                <select onChange={(e) => setStudies(e.target.value)}>
                    <option value="No studies" key="1">Sin estudios</option>
                    <option value="Primary School" key="2">Primaria</option>
                    <option value="High School" key="3">Secundaria</option>
                    <option value="Bachelors" key="4">Grado universitario</option>
                    <option value="Masters" key="5">Masters</option>
                </select>
            </div>
            <div className="form-group">
                <label className="">¿Dispone de coche propio?</label>
                <div className="check-car">
                    <div className="check-group">
                        <p className=" sinmargenP">Si</p>
                        <input type="checkbox" id="car-si" onClick={checkCarSi} />
                    </div>
                    <div className="check-group">
                        <p className=" sinmargenP" >No</p>
                        <input type="checkbox" id="car-no" onClick={checkCarNo} />
                    </div>
                </div>
            </div>
        </div>
        <div className="centrado">
            <button className="centrado" id="btn-login" onClick={handleSubmit}>Añadir</button>
        </div>
        <div className="bottom-margin"></div>
        <NavBar />
    </div>)
}


export default NewVolunteer;