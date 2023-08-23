import { NavLink, Outlet, useMatch , useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPersonajesRickAndMorty } from "./leerApis";
import "./style.css";
import { useMediaQuery } from "react-responsive";


const SubRutasRick = () => {
  const [personajes, setPersonajes] = useState([]);
  const navigate = useNavigate(); // Hook para navegar


  useEffect(() => {
    getAllPersonajesRickAndMorty().then(getPersonajesRM => {
      setPersonajes(getPersonajesRM);
    });
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Detectar dispositivo móvil

  const handleNameClick = (id) => {
    // Navegar directamente a la tarjeta correspondiente
    navigate(`/subrutasrick/cardricksubruta/${id}`);
  };

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
                          {isMobile ? (
                            <button
                              className="navLink"
                              onClick={() => handleNameClick(id)}
                            >
                              {name}
                            </button>
                          ) : (
                            <NavLink
                              className={({ isActive }) =>
                                isActive
                                  ? "navLink activeNavLink"
                                  : "navLink"
                              }
                              to={`cardricksubruta/${id}`}
                            >
                              {name}
                            </NavLink>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="columna2">
          <Outlet />
          </div>
        </div>
      </div>

    </>
  );
};

export default SubRutasRick;
