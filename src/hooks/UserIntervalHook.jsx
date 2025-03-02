import { useEffect, useState } from "react";

export function useIntervalHook(cnt){
    const [count , setCount] = useState(0)

    useEffect(()=>{
        const value = setInterval(()=>{
            setCount(count=> count+1);
        },cnt)
        return ()=>{
            clearInterval(value)
        }
    },[cnt])
    return count;
}