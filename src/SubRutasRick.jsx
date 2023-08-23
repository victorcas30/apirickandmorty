import { NavLink, Outlet, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPersonajesRickAndMorty } from "./leerApis";
import "./style.css";

const SubRutasRick = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    getAllPersonajesRickAndMorty().then(getPersonajesRM => {
      setPersonajes(getPersonajesRM);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="display-4">Sub Rutas Rick And Morty</h1>
        <hr />
        <div className="container containerrutas">
          <div className="columna1">
            <div className="tableContainer">
              <table className="table table-secondary">
                <thead></thead>
                <tbody>
                  {personajes.map(personajesRick => {
                    const { id, name } = personajesRick;
                    return (
                      <tr key={id}>
                        <td>
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "navLink activeNavLink" : "navLink"
                            }
                            to={`cardricksubruta/${id}`}
                          >
                            {name}
                          </NavLink>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="columna2">
            {/* En lugar de mostrar Outlet aquí, mostrarlo después de la lista de personajes */}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SubRutasRick;
    