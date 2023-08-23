import { useEffect } from "react";
import { getAllPersonajesRickAndMorty } from "./leerApis";
import useApiRick from "./useApiRick";
import CardsRick from "./CardsRick";
import Loading from "./Loading";
import "./style.css"

const ApiRick = () => {
    const [personajes,setPersonajes,isLoading,setIsLoading] = useApiRick();

    useEffect(()=>{
        setIsLoading(true);
        getAllPersonajesRickAndMorty().then(personajesRM => {
            setPersonajes(personajesRM); 
            setIsLoading(false);
        })
    },[]);


    return(
        <>
        <div className="container">
        <h1 className="display-4">Api Rick and Morty</h1>
        <hr/>
        {isLoading && <Loading/>}
        <div className="contenedorTarjeta">
        {
            personajes.map(personaje => {
                const {id} = personaje;
                return <CardsRick key={id} personajeRickAndMorty={personaje} />
            })
        }
        </div>
        </div>
        </>
    )
}

export default ApiRick;