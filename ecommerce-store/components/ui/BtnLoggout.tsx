"use client"
import React from 'react'

import { signOut } from 'next-auth/react'
import Button from './button'

const BtnLoggout = () => {
  return (
    <div>
        <Button  onClick={()=>signOut({
            redirect:true,
            callbackUrl:`${window.location.origin}/sign-in`
        })}>Sign Out</Button>
    </div>
  )
}

export default BtnLoggout