 "use client"
import Container from '@/components/ui/container';
import NoResult from '@/components/ui/no-result';
import useCart from '@/hooks/use-cart';
import React from 'react'
import {useState,useEffect} from "react"
import CartItem from './components/cart-item';
import Summary from './components/summary';

export const revalidate=0;

const Cart = () => {
    const [isMouted,setIsMouted]=useState(false);
    const cart=useCart()
    useEffect(()=>{
        setIsMouted(true)
    },[])
    if(!isMouted){
        return null;
    }
  return (
    <div className='bg-white'>
        <Container>
            <div className='px-4 py-16 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-black'>
                    Shopping Cart
                </h1>
                <div className='mt-12 lg:grid-cols-12 lg:grid lg:items-start gap-x-12'>
                    <div className='lg:col-span-7'>

                        {cart.items.length==0&&<NoResult/>}
                        <ul>
                            {cart.items.map((item)=>(
                                <CartItem key={item.id} data={item} />
                            ))}
                        </ul>

                    </div>
                    <Summary/>
                </div>

            </div>
        </Container>

    </div>
  )
}

export default Cart