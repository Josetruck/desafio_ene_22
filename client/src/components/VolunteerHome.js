import { useEffect, useState } from "react";
import CardHome from "./CardHome";
import usuarios_asignados from '../images/usuarios_asignados.png'
import talleres from '../images/talleres.png'
import agenda from '../images/agenda.png'


function VolunteerHome() {


    return (<div className="VolunteerHome">
        <CardHome title="Usuaria/os asignada/os" subtitle="Mira a quién te hemos asignado" image={usuarios_asignados} view={"usuariosAsignados"}/>
        <CardHome title="Talleres y eventos" subtitle="Asiste y pasa un buen rato" image={talleres} view={"talleres"}/>
        <CardHome title="Agenda" subtitle="Todas tus actividades en un sitio" image={agenda} view={"agenda"}/>

    </div>)
}


export default VolunteerHome;