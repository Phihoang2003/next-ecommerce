
import React from 'react'
import {useParams} from "next/navigation"
import { db } from '@/lib/db';

interface Dashboard{
    params:{storeId:string}
}
const Dashboard:React.FC<Dashboard> = async({params}) => {
  
  const store=await db.store.findFirst
  ({
    where:{
      id:params.storeId
    }
  })
  return (
    <div>Hello store:{store?.name}</div>
  )
}

export default Dashboard