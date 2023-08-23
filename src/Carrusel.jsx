import React from "react";
import { Carousel } from "react-bootstrap";
import "./carrusel.css";
import useCarrusel from "./useCarrusel";

const Carrusel = (props) => {
    const { id, name, status, species, image, gender } = props.rick;
    const { incrementar, decrementar } = props;

    return (
        <>
            <h1 className="display-4">Carrusel Rick and Morty</h1>
            <hr />
            <div className="d-flex justify-content-center align-items-center">
                <Carousel className="carruselSize" controls={false}>
                    <Carousel.Item>
                        <div className="position-relative">
                            <img src={image} className="d-block w-100" alt="..." />
                            <button class="carousel-control-prev" type="button" onClick={decrementar} data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" onClick={incrementar} data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                        </div>
                        <Carousel.Caption className="cajaCarrusel">
                            <h4>{`${id} - ${name}`}</h4>
                            <p>
                                Estato: {status}{" "}
                                {status === "Alive" ? "🟢" : status === "Dead" ? "🔴" : "🤍"}{" "}
                                Especie: {species}{" "}
                                {species === "Human" ? "😎" : "👽"} Género: {gender}{" "}
                                {gender === "Male" ? "🚹" : "🚺"}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Carrusel;
