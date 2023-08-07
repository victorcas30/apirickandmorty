const getPersonajeRickAndMorty = async(numId) => {
    try {
        const getPersonaje = await fetch(`https://rickandmortyapi.com/api/character/${numId}`)
        const resultado = await getPersonaje.json();
        return resultado;

    } catch (error) {
        throw new Error("Error");
    }
}

export {getPersonajeRickAndMorty}