import { useState , useEffect } from "react"
import { Menu_API } from "./constants";

export const useRestMenu = (resiD)=>{
    const [newmenu,setMenu] = useState(null);
     useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=> {
        const data = await fetch(Menu_API + resiD);
        const Menu = await data.json();
        setMenu(Menu);
       
    }
    return newmenu;
}