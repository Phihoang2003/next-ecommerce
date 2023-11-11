
"use client"

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "../../hooks/use-store-modal";
import { useEffect } from "react";

 const SetUpPage=() =>{

  const isOpen=useStoreModal((state)=>state.isOpen);
  const onOpen=useStoreModal((state)=>state.onOpen);
  useEffect(()=>{
    if(!isOpen){
      onOpen()
    }
  },[isOpen,onOpen]);
  return null;
}

export default SetUpPage;
