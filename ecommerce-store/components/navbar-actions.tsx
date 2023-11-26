"use client"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/button"
import {useState,useEffect} from "react"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"
const NavbarActions = () => {
    const [isMouted,setIsMouted]=useState(false)
    const router=useRouter();
    useEffect(()=>{
        setIsMouted(true);
    },[])
    const cart =useCart()
    if(!isMouted){
        return null;
    }
    const onClick=()=>{
        router.push("/cart")
    }
    
  return (
    <div className="ml-auto flex items-center gap-x-4">
        <Button onClick={onClick} className="flex items-center rounded-full bg-black px-4 py-2">
            <ShoppingBag size={20} color="white"/>
            <span className="ml-2 text-sm text-white font-medium">
            {cart.items.length}
        </span>
        </Button>
        
    </div>
  )
}

export default NavbarActions