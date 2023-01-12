function CardHome(props) {
    return (<div className="CardHome">
        <div className="card-home Home">
            <img src={props.image} alt="Image" />
            <div className="sub-card">
                <div className="sub-card-text-container">
                    <p className="card-title">{props.title}</p>
                    <p className="card-subtitle">{props.subtitle}</p>
                </div>
                <button className="centrado btn-card">Ver</button>
            </div>
        </div>
    </div>)
}

export default CardHome;





