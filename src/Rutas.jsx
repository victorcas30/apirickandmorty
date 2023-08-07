import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import ApiRick from "./ApiRick";
import ApiRickCarrusel from "./ApiRickCarrusel";
import SubRutasRick from "./SubRutasRick";
import Acerca from "./Acerca";
import Loading from "./Loading";
import Error404 from "./Error404";
import CardRickSubRuta from "./CardRickSubRuta";

const Rutas = () => {
    return(
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/apirick" element={<ApiRick/>} />
            <Route path="/apirickcarrusel" element={<ApiRickCarrusel/>} />
            <Route path="/subrutasrick/*" element={<SubRutasRick/>}>
                <Route path="cardricksubruta/:id" element={<CardRickSubRuta/>} />
            </Route>
            <Route path="/acerca" element={<Acerca/>} />
            <Route path="/loading" element={<Loading/>} />
            <Route path="*" element={<Error404/>} />
        </Routes>
        </>
    )
}

export default Rutas;