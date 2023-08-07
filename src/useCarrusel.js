import { useState } from "react";

const useCarrusel = () => {
    
    const [num,setNum] = useState(1);

    const incrementar = () => {
        if(num>0){
            setNum(num+1);
        }
    }
    const decrementar = () => {
        if(num>1){
            setNum(num-1);
        }
    }

    return [num,incrementar,decrementar];

}

export default useCarrusel;