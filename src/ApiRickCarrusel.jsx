import "./style.css"
import useCarrusel from "./useCarrusel";
import Carrusel from "./Carrusel";
import useApiRick from "./useApiRick";
import { getPersonajeRickAndMorty } from "./singlePersonaje";
import { useEffect } from "react";

const ApiRickCarrusel = () => {

    const [num,incrementar,decrementar] = useCarrusel();
    const [personaje,setPersonaje] = useApiRick();

    useEffect(() => {
        getPersonajeRickAndMorty(num).then(personajeRM => {
            setPersonaje(personajeRM);
        })
    },[num])

    return(
        <>
        <div className="container">
        <Carrusel key={num} rick={personaje} incrementar={incrementar} decrementar={decrementar} num={num} />
        </div>
        </>
    )

}

export default ApiRickCarrusel;