"use client"

import React from 'react'
import Link from 'next/link'
import "./Navbar.css"
import img from "@/components/img/JR-removebg-preview 1.png"
import { signIn , useSession, signOut} from 'next-auth/react'
import Image from "next/image"

function Navbar() {
  const {data:session}= useSession();

  
  return (
    <nav className='nav'>
        <Image src={img} alt='logo' width={132} height={141} className='Logo'/>
        <div>
          {
            session?.user ? 
            
            <div>
             
            </div>
           
            
            :
            <div className='links'>
            <Link href="/dashboard" className='link'>
            Dashboard
            </Link>
            
            <button onClick={()=> signIn()} className='botonNav'>
              Sign In
            </button>
            </div>
          }
           
        </div>
    </nav>
  )
}

export default Navbar