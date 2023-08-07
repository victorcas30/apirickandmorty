import { useState } from "react"

const useApiRick = () => {
    const [personajes,setPersonajes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    return [personajes,setPersonajes,isLoading, setIsLoading]
}

export default useApiRick