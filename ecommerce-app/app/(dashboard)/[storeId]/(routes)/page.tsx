
import React from 'react'
import {useParams} from "next/navigation"
import { db } from '@/lib/db';
const Dashboard = async(params:{storeId:string}) => {
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