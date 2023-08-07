import "./style.css";
import useCarrusel from "./useCarrusel";

const Carrusel = props => {
    const {id,name,status,species,image,gender} = props.rick;
    const {incrementar,decrementar,num} = props;

    return(
        <>
        <h1 className="display-4">Carrusel Rick and Morty </h1>
        <hr/>
        <div className="d-flex justify-content-center align-items-center">
        <div id="carouselExampleCaptions" className="carousel slide carruselSize">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={image} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block cajaCarrusel">
                <h4>{`${id} - ${name}`}</h4>
                <p>Estato: {status} {status==="Alive" ? "🟢" : (status==="Dead" ? "🔴" : (status==="unknown" ? "⬛" : "🤍"))} 
                 {" "}Especie: {species} {species==="Human" ? "😎" : "👽"}
                 {" "}Genero: {gender} {gender==="Male" ? "🚹" : "🚺" }
                </p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" onClick={decrementar} data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={incrementar} data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>

        </>
    )

}

export default Carrusel;