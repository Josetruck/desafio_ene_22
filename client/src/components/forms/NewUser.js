import { useEffect, useState } from "react";

function NewUser() {

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

    const handleSubmit = ()=>{

    }

        return (<div className="NewUser">
                   <div className="form">
            <div className="form-group">
                <label className="negrita">Nombre</label>
                <input type="text" onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="negrita">Apellidos</label>
                <input type="text" onChange={(e) => setLast_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="negrita">Fecha de nacimiento</label>
                <input type="date" onChange={(e) => setBirth_date(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="negrita">Dirección</label>
                <input type="text" onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="negrita">Código postal</label>
                <input type="number" onChange={(e) => setPostal_code(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="negrita">Teléfono</label>
                <input type="text" onChange={(e) => setPhone_number(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="negrita">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="negrita">Contraseña</label>
                <input type="password" onChange={(e) => setPass(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="negrita">Repetir contraseña</label>
                <input type="password" onChange={(e) => setPass2(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="negrita">Estudios</label>
                <input type="text" onChange={(e) => setStudies(e.target.value)} />
            </div>
            
        </div>
        <div className="centrado">
            <button className="centrado" id="btn-login" onClick={handleSubmit}>Entrar</button>
        </div>
        </div>)
    }


export default NewUser;