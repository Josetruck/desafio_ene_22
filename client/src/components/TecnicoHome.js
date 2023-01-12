import { useEffect, useState } from "react";
import CardHome from "./CardHome";
import usuarios_asignados from '../images/usuarios_asignados.png'
import altaVoluntarios from '../images/altaVoluntarios.png'
import crearEventos from '../images/crearEventos.png'
import asignarTareas from '../images/asignarTareas.png'
import verReportes from '../images/verReportes.png'


function TecnicoHome() {


    return (<div className="TecnicoHome">
        <CardHome title="Dar de alta voluntario/as" subtitle="" image={altaVoluntarios} />
        <CardHome title="Dar de alta usuario/as" subtitle="" image={usuarios_asignados} />
        <CardHome title="Crear eventos" subtitle="" image={crearEventos} />
        <CardHome title="Asignar tareas" subtitle="" image={asignarTareas} />
        <CardHome title="Ver reportes de voluntario/as" subtitle="" image={verReportes} />

    </div>)
}


export default TecnicoHome;