import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPersonajesRickAndMorty } from "./leerApis";
import "./style.css"


const SubRutasRick = () => {

    const [personajes,setPersonajes] = useState([]);

    useEffect(() => {
        getAllPersonajesRickAndMorty().then(getPersonajesRM => {
            setPersonajes(getPersonajesRM);
            console.table(personajes);
        })
    },[]);

    return(
        <>
        <div className="container">
        <h1 className="display-4">Sub Rutas Rick And Morty</h1>
        <hr/>
        <div className="container containerrutas">
            <div className="columna1">
                <div className="tableContainer">
                <table className="table table-secondary">
                    <thead></thead>
                    <tbody>
                    {
                        personajes.map(personajesRick => {
                            const {id,name} = personajesRick;
                            return <tr key={id}>
                                <td>
                                    <NavLink className={({isActive}) => isActive ? "navLink activeNavLink" : "navLink"} to={`cardricksubruta/${id}`} >{name}</NavLink>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
                </div>
            </div>
            <div className="columna2">
                <Outlet/>
            </div>
        </div>
        </div>
        </>
    )
}

export default SubRutasRick;