import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="container">
            <h1 className="display-4">Home</h1>
            <hr/>
            <h2>Mis Proyectos</h2>
            <div className="row">
            <div className="col-md-4">
                <div className="card project-card">
                <img src="https://victorcas30.github.io/src/assets/img/rick1.jpg" className="card-img-top" alt="Proyecto 1"/>
                <div className="card-body">
                    <h5 className="card-title">Proyecto 1</h5>
                    <p className="card-text">Tarjetas - Rick And Morty.</p>
                    <Link to="/apirick" className="btn btn-dark">Ver más</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card project-card">
                <img src="./src/assets/img/rick2.jpg" className="card-img-top" alt="Proyecto 2"/>
                <div className="card-body">
                    <h5 className="card-title">Proyecto 2</h5>
                    <p className="card-text">Carrusel - Rick And Morty.</p>
                    <Link to="/apirickcarrusel" className="btn btn-dark">Ver más</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card project-card">
                <img src="./src/assets/img/rick3.jpg" className="card-img-top" alt="Proyecto 3"/>
                <div className="card-body">
                    <h5 className="card-title">Proyecto 3</h5>
                    <p className="card-text">Sub Rutas - Rick And Morty.</p>
                    <Link to="/subrutasrick" className="btn btn-dark">Ver más</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home;