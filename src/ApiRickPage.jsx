import React, { useEffect, useState } from 'react';
import { getAllPersonajesRickAndMortyPage } from './leerApis';
import "./page.css"

function ApiRickPage() {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [filters, setFilters] = useState({
        name: '',
        status: '',
        origin: '',
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllPersonajesRickAndMortyPage(currentPage);
                console.log("response", response)
                setCharacters(response.results);
                setTotalPages(response.info.pages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [currentPage]);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            console.log('Going to previous page');
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            console.log('Going to next page');
            setCurrentPage(currentPage + 1);
        }
    };

    const handleFilterChange = (filterType, value) => {
        setFilters({ ...filters, [filterType]: value });
        console.log("Filtro", filterType)
        console.log("Value", value)
    };

    console.log('Current Page:', currentPage);
    console.log('Total Pages:', totalPages);

    return (
        <div className="container">
        <h1 className="display-4">Rick and Morty Personajes</h1>
        <hr/>
        <div className="filters form-inline">
            <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Filtrar por nombre..."
                onChange={(e) => handleFilterChange('name', e.target.value)}
            />
            <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Filtrar por estado..."
                onChange={(e) => handleFilterChange('status', e.target.value)}
            />
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Filtrar por origen..."
                onChange={(e) => handleFilterChange('origin', e.target.value)}
            />
        </div>
            <ul className='ulpage'>
                {characters
                .filter((character) =>
                    character.name.toLowerCase().includes(filters.name.toLowerCase()) &&
                    character.status.toLowerCase().includes(filters.status.toLowerCase()) &&
                    character.origin.name.toLowerCase().includes(filters.origin.toLowerCase())
                )
                .map((character) => (
                    <li className="lipage" key={character.id}>
                    <img src={character.image} alt={character.name} className='imgrick' />
                    <span className='name'>{character.name}</span>
                    <span className='name'>{character.status ? character.status : 'No hay Estatus'}</span>
                    <span className='name'>{character.origin.name ? character.origin.name : 'Sin origen'}</span>
                    </li>
                    
                ))}
            </ul>
            <button className="btn btn-dark" onClick={goToPreviousPage} disabled={currentPage === 1}>Atras</button>
            <button className="btn btn-dark ms-4" onClick={goToNextPage} disabled={currentPage === totalPages}>Siguiente</button>
        </div>
    );
}

export default ApiRickPage;
