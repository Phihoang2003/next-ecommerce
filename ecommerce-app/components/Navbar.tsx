
import { UserButton, auth } from '@clerk/nextjs'
import React from 'react'
import { MainNav } from './MainNav'
import { redirect } from "next/navigation";
import { db } from '@/lib/db';
import StoreSwitcher from './StoreSwitcher';

const Navbar =async () => {
    const {userId}=auth();
    if(!userId){
        redirect("/sign-in")
    }
    const stores=await db.store.findMany({
        where:{
            userId
        }
    })

  return (
    <div className='border-b'>
        <div className='flex h-16 items-center px-4'>
            <StoreSwitcher items={stores}/>
            <MainNav className='mx-6'/>
            
            <div className='flex ml-auto space-x-4'>
                <UserButton afterSignOutUrl='/'/>
            </div>
        </div>


    </div>
  )
}

export default Navbar
