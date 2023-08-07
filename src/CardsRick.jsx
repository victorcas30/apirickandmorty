const CardsRick = props => {
    const {id,name,status,species,gender,image} = props.personajeRickAndMorty;

    return(
        <>
        <div className="card" style={{"width": "18rem"}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title h5Name">{name}</h5>
            <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Estato: {status} {status==="Alive" ? "🟢" : (status==="Dead" ? "🔴" : (status==="unknown" ? "⬛" : "🤍"))}</li>
            <li className="list-group-item">Especie: {species} {species==="Human" ? "😎" : "👽"}</li>
            <li className="list-group-item">Genero: {gender} {gender==="Male" ? "🚹" : "🚺" }</li>
        </ul>
        </div>
        </>
    )
}

export default CardsRick;