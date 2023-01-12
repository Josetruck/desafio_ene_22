import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import VolunteerHome from "./VolunteerHome";
import TecnicoHome from "./TecnicoHome";
import avatar from '../images/avatar.jpg'

function Home() {
    const [volunteer, setVolunteer] = useState(false)
    useEffect(() => {
        async function getUser() {
            if (!volunteer) {
                const res= await fetch("/getLogged")
                const volunteerData= await res.json()
                setVolunteer(volunteerData)
            }
        }
        getUser();
    }, [])

    if (volunteer) {
        return (<div className="Home">
            {volunteer.avatar ? <img className="avatar-home" src={volunteer.avatar} alt="avatar" /> : <img className="avatar-home" src={avatar} alt="avatar" />}
            <p className="nombre-home">Hola {volunteer.first_name}</p>
            {volunteer.rol === "volunteer" && <VolunteerHome />}
            {volunteer.rol === "tecnico" && <TecnicoHome />}
            <div className="bottom-margin"></div>
            <NavBar />
        </div>)
    } else {
        return <p>Cargando datos...</p>
    }


}


export default Home;