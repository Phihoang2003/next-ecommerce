"use client"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/button"
import {useState,useEffect} from "react"
const NavbarActions = () => {
    const [isMouted,setIsMouted]=useState(false)
    useEffect(()=>{
        setIsMouted(true);
    },[])
    if(!isMouted){
        return null;
    }
  return (
    <div className="ml-auto flex items-center gap-x-4">
        <Button className="flex items-center rounded-full bg-black px-4 py-2">
            <ShoppingBag size={20} color="white"/>
            <span className="ml-2 text-sm text-white font-medium">
            0
        </span>
        </Button>
        
    </div>
  )
}

export default NavbarActions