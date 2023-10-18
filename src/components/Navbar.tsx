"use client"

import React from 'react'
import Link from 'next/link'
import { signIn , useSession, signOut} from 'next-auth/react'
function Navbar() {
  const {data:session}= useSession();
  console.log(session?.user?.image);
  
  return (
    <nav className='flex justify-between'>
        <h1>JR Login</h1>
        <div>
          {
            session?.user ? 
            
            <div>
              <h2>{session?.user?.name}</h2>
              <img src={`${session?.user?.image}`} alt="" />
              <button onClick={()=> signOut()}>
                  logOut
              </button>
            </div>
           
            
            :
            <>
            <Link href="/dashboard">
            Dashboard
            </Link>
            
            <button onClick={()=> signIn()} className='bg-sky-400 px-3 py-200 rounded'>
              Sign In
            </button>
            </>
          }
           
        </div>
    </nav>
  )
}

export default Navbar