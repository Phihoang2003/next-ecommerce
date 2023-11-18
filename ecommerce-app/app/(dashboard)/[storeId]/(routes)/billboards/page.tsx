import React from 'react'
import { BillboardClient } from './component/client'
import { db } from '@/lib/db'
import { BillboardColumn } from './component/columns'
import {format} from "date-fns"
const BillboardPage = async({
  params
}:{params:{storeId:string}}) => {
  const billboards=await db.billboard.findMany({
    where:{
      storeId:params.storeId
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  const formattedBillboards:BillboardColumn[]=billboards.map((item)=>(
    {
      id:item.id,
      label:item.label,
      createdAt:format(item.createdAt,"MMMM mo,yyyy")
    }
  ))
  

  return (
    <div className='flex-1 p-8 pt-6 space-y-4'>
        <BillboardClient data={formattedBillboards}/>
    </div>
  )
}

export default BillboardPage