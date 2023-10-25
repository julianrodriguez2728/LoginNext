"use client"

import React from 'react'
import cel from "@/components/img/iPhone 15 Pro.png"
import Image from "next/image"
import { Antonio , Josefin_Sans} from 'next/font/google'
import { signIn , useSession, signOut} from 'next-auth/react'

import "./OnBoarding.css"
const antonio = Antonio({
  subsets:["latin"],
  weight: ['200', '600', '700']
})
const josefin = Josefin_Sans({
  subsets:["latin"],
  weight: ['300','400' ,'600', '700']
})

function OnBoarding() {
  const {data:session}= useSession();
  return (
    <div>
      {
        session?.user 
        ?
        <div className="intro" >
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:250}}>

          <div className="texto" style={{width:"auto", marginRight:200}}>
          <h2 className={antonio.className} style={{fontSize:70, fontWeight:700}}>Welcome!</h2>
           <h2 className={antonio.className} style={{fontSize:70, fontWeight:700, color:"#9479FF"}}>{session?.user?.name}</h2>
           <h3 className={antonio.className} style={{fontSize:30, fontWeight:300}}>{session?.user?.email}</h3>
          </div>
              <Image src={`${session?.user?.image}`} alt="" style={{borderRadius:150}} height={300}  width={300}/>
          </div>
              <button onClick={()=> signOut()} style={{backgroundColor:"black", color:"white", borderRadius:10, height:50, width:200}}>
                  logOut
              </button>
              <div className="serviceContainer">
          <div className="uno"></div>
          <div className="dos"></div>
          <div className="tres"></div>
        </div>
        </div>
        :
        <div className="intro">
        <div className="cuadroTexto">
          <div className="texto">
        <p className={josefin.className} style={{fontSize:35, fontWeight:600, color:"#6F7DF9"}} >Landing page</p>
        <h1 className={antonio.className} style={{fontSize:70, fontWeight:700}}>This is my first Landing Page design</h1>
        <p className={josefin.className} style={{fontSize:25, fontWeight:400}}>Lorem Ipsum texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno </p>
        <button className='botonIntro'><a href="#service">Let´s start</a></button>
          </div>
        <div className="phone">
        <Image src={cel} alt='logo' width={803} height={600}/>
        </div>
        </div>
        <h2 className={antonio.className} style={{fontSize:40, fontWeight:700}}>Let ´s create your <span style={{color:"#6F7DF9"}}> Website</span></h2>
        <h3 className={antonio.className} style={{fontSize:20, fontWeight:700, color:"rgb(121, 121, 121)"}}>we have many options</h3>
        <div className="serviceContainer" id='service'>
          <div className="uno"></div>
          <div className="dos"></div>
          <div className="tres"></div>
        </div>
      </div>
      }
        
    </div>
  )
}

export default OnBoarding