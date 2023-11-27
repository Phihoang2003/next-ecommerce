import type { Metadata } from 'next'
import {  Urbanist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider/>
        <ToastProvider/>
        <main className={!session?"h-screen flex flex-col justify-center items-center":""}>
          <Navbar />
          {children}
        </main>
          
       
        <Footer/>
      </body>
    </html>
  )
}
