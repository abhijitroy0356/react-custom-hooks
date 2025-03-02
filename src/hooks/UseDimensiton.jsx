import { useEffect, useState } from "react";

export function useDimensitons(){
    const [dimension, setDimentiosn] = useState({width:window.innerWidth, height:window.innerHeight})
    function handleDimension(){
        setDimentiosn({
            width:window.innerWidth,
            height:window.innerHeight
        })
    } 
    useEffect(()=>{
        window.addEventListener('resize',handleDimension);
        return window.removeEventListener('resize',handleDimension)
    },[])
    return dimension
}