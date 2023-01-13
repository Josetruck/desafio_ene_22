import { useEffect, useState } from "react";
import HeadTitle from "../HeadTitle";
import NavBar from "../NavBar";

function NewUser() {

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [birth_date, setBirth_date] = useState("")
    const [location, setLocation] = useState("")
    const [postal_code, setPostal_code] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [email, setEmail] = useState("")
    const [healthIssues, setHealthIssues] = useState("")
    const [pass2, setPass2] = useState("")
    const [availability, setAvailability] = useState("")
    const [studies, setStudies] = useState("")
    const [car, setCar] = useState(false)
    const [juegos, setJuegos] = useState(false)
    const [reuniones, setReuniones] = useState(false)
    const [musica, setMusica] = useState(false)
    const [baile, setBaile] = useState(false)
    const [cocina, setCocina] = useState(false)
    const [manualidades, setManualidades] = useState(false)
    const [comments, setComments] = useState("")


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
    const setEnable= (value)=>{
        const button = document.getElementById("btn-register-user")
        if(value){
            button.disabled =false
        }else{
            button.disabled=true
        }


    }

    return (<div className="NewUser">
        <HeadTitle title="Formulario usuaria/os"/>
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
                <label className="">Enfermedades y medicamentos</label>
                <textarea  onChange={(e) => setHealthIssues(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="">Actividades de interés</label>
                <div className="check-interest">
                    <div className="check-group-interest">
                        <input type="checkbox"  onClick={(e)=>setJuegos(e.target.checked)} />
                        <p className=" sinmargenP">Juegos de mesa</p>
                    </div>
                    <div className="check-group-interest">
                        <input type="checkbox"  onClick={(e)=>setReuniones(e.target.checked)} />
                        <p className=" sinmargenP" >Reuniones</p>
                    </div>
                    <div className="check-group-interest">
                        <input type="checkbox"  onClick={(e)=>setMusica(e.target.checked)} />
                        <p className=" sinmargenP">Música</p>
                    </div>
                    <div className="check-group-interest">
                        <input type="checkbox"  onClick={(e)=>setBaile(e.target.checked)} />
                        <p className=" sinmargenP" >Baile</p>
                    </div>
                    <div className="check-group-interest">
                        <input type="checkbox"  onClick={(e)=>setCocina(e.target.checked)} />
                        <p className=" sinmargenP">Cocina</p>
                    </div>
                    <div className="check-group-interest">
                        <input type="checkbox"  onClick={(e)=>setManualidades(e.target.checked)} />
                        <p className=" sinmargenP" >Manualidades</p>
                    </div>
                </div>
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
            <div className="form-group">
                <label className="">Comentarios</label>
                <textarea  onChange={(e) => setComments(e.target.value)} />
            </div>
            <div className="form-group">
                <div className="check-group">
                    <input type="checkbox" id="car-si" onClick={(e)=>setEnable(e.target.checked)} />
                    <p style={{ fontWeight:"200", fontSize:"12px" }}>Acepto la</p><a href="" style={{color:"red", fontWeight:"200", fontSize:"12px", textDecoration:"underline" }}>Politica de privacidad de datos</a>
                </div>
            </div>

        </div>
        <div className="centrado">
            <button className="centrado" id="btn-register-user" onClick={handleSubmit}>Registrar</button>
        </div>
        <div className="bottom-margin"></div>
        <NavBar />
    </div>)
}


export default NewUser;