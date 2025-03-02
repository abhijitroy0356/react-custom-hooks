import { useEffect, useState } from "react";

export function useMouseMove(){
    const [position, setPosition] = useState({
        x:0,
        y:0
    })
    const mouseMove = (e) =>{
        setPosition({
            x:e.clientX,
            y:e.clientY
        })
    }
    
    useEffect(()=>{
        window.addEventListener('mousemove',mouseMove)
        return ()=>{
            window.removeEventListener('mousemove',mouseMove);
        }
    },[])
    return position
}
