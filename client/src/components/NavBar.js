import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faPeopleGroup, faListCheck, faPalette, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function NavBar() {


    return (<div className="NavBar">
        <Link to={"/"}>
            <div className="btn-NavBar">
                <FontAwesomeIcon icon={faHouseUser} />
                <p className="sub-btn-NavBar">Home</p>
                <div className="over-btn" id="over-btn-home"></div>
            </div>
        </Link>
        <Link to={"/usuarios"}>
            <div className="btn-NavBar">
                <FontAwesomeIcon icon={faPeopleGroup} />
                <p className="sub-btn-NavBar">Usuarios/as</p>
                <div className="over-btn" id="over-btn-usuarios"></div>
            </div>
        </Link>
        <Link to={"/talleres"}>
            <div className="btn-NavBar">
                <FontAwesomeIcon icon={faPalette} />
                <p className="sub-btn-NavBar">Talleres</p>
                <div className="over-btn" id="over-btn-talleres"></div>
            </div>
        </Link>
        <Link to={"/agenda"}>
            <div className="btn-NavBar">
                <FontAwesomeIcon icon={faCalendar} />
                <p className="sub-btn-NavBar">Agenda</p>
                <div className="over-btn" id="over-btn-tareas"></div>
            </div>
        </Link>
    </div>)
}


export default NavBar;