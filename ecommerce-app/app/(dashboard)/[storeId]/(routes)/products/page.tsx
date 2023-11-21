import React from 'react'
import { ProductClient } from './component/client'
import { db } from '@/lib/db'
import { ProductColumn } from './component/columns'
import {format} from "date-fns"
import { formatter } from '@/lib/utils'
const ProductPage = async({
  params
}:{params:{storeId:string}}) => {
  const products=await db.product.findMany({
    where:{
      storeId:params.storeId
    },
    include:{
      category:true,
      size:true,
      color:true
    },
    orderBy:{
      createAt:"desc"
    }
  })

  const formattedProducts:ProductColumn[]=products.map((item)=>(
    {
      id:item.id,
      name:item.name,
      isFeatured:item.isFeatured,
      isArchived:item.isArchived,
      category:item.category.name,
      size:item.size.name,
      color:item.color.name,
      price:formatter.format(item.price.toNumber()),
      createAt: format(item.createAt, 'MMMM do, yyyy'),
    }
  ))
  

  return (
   <div className='flex-col'>
       <div className='flex-1 p-8 pt-6 space-y-4'>
        <ProductClient data={formattedProducts}/>
    </div>
   </div>
  )
}

export default ProductPage