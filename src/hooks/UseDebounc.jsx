import { useEffect, useState } from "react";

export function useDebounce(input, timeout){
    const [value, setValue] = useState('')
    useEffect(()=>{
       const val= setTimeout(() => {
            setValue(input)
        }, timeout);
        return ()=>{
            clearTimeout(val)
        }
    },[input,timeout])
    return value;
}