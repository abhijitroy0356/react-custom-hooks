import { useState, useEffect } from "react";



export function useIsOnline(){
    const [online, setOnline]= useState(window.navigator.onLine)
    
    useEffect(()=>{
      window.addEventListener('online',()=>{
        setOnline(true);
      })
      window.addEventListener('offline',()=>{
        setOnline(false);
      })
    },[])
    
    console.log(online)
    return online
  }

