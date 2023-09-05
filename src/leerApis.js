const getAllPersonajesRickAndMorty = async() => {
    try {
        const getAllPersonajes = await fetch("https://rickandmortyapi.com/api/character")
        const {results} = await getAllPersonajes.json();
        return results;
    } catch (error) {
        throw new Error("A ocurrido un error");
    }
}

const getAllPersonajesRickAndMortyPage = async (page) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Ha ocurrido un error");
    }
};

const getAllPersonajesMarvel = async(nombrePersonaje) => {
    try {
        const getAllPersonajes = await fetch(`https://gateway.marvel.com/v1/public/characters?apikey=f19709d93d497312d9214a95fdd52a5d&hash=64652737b0a9cad28464c984a45714e3&ts=1000&nameStartsWith=${nombrePersonaje}`)
        const {data} = await getAllPersonajes.json();
        const {results} = data;
        return results;
    } catch (error) {
        throw new Error("A ocurrido un error");
    }
}

const getAllMarvel = async() => {
    try {
        const getAllPersonajes = await fetch(`https://gateway.marvel.com/v1/public/characters?apikey=f19709d93d497312d9214a95fdd52a5d&hash=64652737b0a9cad28464c984a45714e3&ts=1000&nameStartsWith=spider`)
        const {data} = await getAllPersonajes.json();
        const {results} = data;
        return results;
    } catch (error) {
        throw new Error("A ocurrido un error");
    }
}

const getPersonajeRickAndMorty = async(id) => {
    try {
        const getPersonaje = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const resultado = await getPersonaje.json();
        return resultado;
    } catch (error) {
        throw new Error("A ocurrido un error");
    }
}

const getPersonajeMarvel = async(id) => {
    try {
        const getPersonaje = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=f19709d93d497312d9214a95fdd52a5d&hash=64652737b0a9cad28464c984a45714e3&ts=1000`);
        const {data} = await getPersonaje.json();
        const {results} = data;
        return results[0];
    } catch (error) {
        throw new Error("A ocurrido un error");
    }
}

export {getAllPersonajesRickAndMorty,getAllPersonajesMarvel,getPersonajeRickAndMorty,getPersonajeMarvel,getAllMarvel, getAllPersonajesRickAndMortyPage}