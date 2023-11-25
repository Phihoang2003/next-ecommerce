"use client"

import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import IconButton from './icon-button'
import {Expand,ShoppingCart} from "lucide-react"
import Currency from './currency'
interface ProductCardProps{
    data:Product
}
const ProductCard:React.FC<ProductCardProps> = ({data}) => {
  return (
    <div className='bg-white group cursor-pointer rounded-xl border space-y-4 p-3 '>
        {/* Images and Actions */}
        <div className='aspect-square rounded-xl bg-gray-100 relative'>
            <Image
                src={data?.images?.[0]?.url}
                alt='image'
                fill
                className='aspect-square rounded-md object-cover'
            />
            <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                <div className='flex gap-x-6 justify-center'>

                    <IconButton
                        onClick={()=>{}}
                        icon={<Expand size={20} className='text-gray-600'/>}
                    />

                    <IconButton
                        onClick={()=>{}}
                        icon={<ShoppingCart size={20} className='text-gray-600'/>}
                    />
                </div>
            </div>
        </div>


        {/* Description */}
        <div>
            <p className='font-semibold text-lg'>
                {data.name}
            </p>
            <p className='text-sm text-gray-500'>
                {data.category?.name}
            </p>
        </div>
        {/* Prices */}
        <div className='flex items-center justify-between'>
            <Currency value={data?.price}/>

        </div>
    </div>
  )
}

export default ProductCard