import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faPeopleGroup, faListCheck, faPalette } from '@fortawesome/free-solid-svg-icons'

function NavBar() {


    return (<div className="NavBar">
        <div className="btn-NavBar">
            <FontAwesomeIcon icon={faHouseUser} />
            <p className="sub-btn-NavBar">Home</p>
            <div className="over-btn" id="over-btn-home"></div>
        </div>
        <div className="btn-NavBar">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <p className="sub-btn-NavBar">Usuarios/as</p>
            <div className="over-btn" id="over-btn-usuarios"></div>
        </div>
        <div className="btn-NavBar">
            <FontAwesomeIcon icon={faPalette} />
            <p className="sub-btn-NavBar">Talleres</p>
            <div className="over-btn" id="over-btn-talleres"></div>
        </div>
        <div className="btn-NavBar">
            <FontAwesomeIcon icon={faListCheck} />
            <p className="sub-btn-NavBar">Tareas</p>
            <div className="over-btn" id="over-btn-tareas"></div>
        </div>
    </div>)
}


export default NavBar;