import React, { useEffect } from 'react'
import './pages.css'

const LandingPage = () => {


  useEffect(()=>{
    random()

  },[])
    const slogans = {
        1: "Capture Moments, Share Memories...",
        2: "Where Every Pixel Tells a Story.",
        3: "Unleash Your Creativity, One Image at a Time.",
        4: "Upload, Connect, Inspire.",
        5: "Bringing Your Vision to the Digital Canvas.",
        6: "Share Your World Through the Lens.",
        7: "Turning Moments into Masterpieces.",
        8: "Empowering Visual Storytelling.",
        9: "Your Images, Our Platform, Infinite Possibilities.",
        10: "Join the Image Revolution, Start Here."
      };

      const random=()=>{
        const random=Math.floor(Math.random()*10)
        return slogans[random]
      }
  return (
    <main className='landing-body bg-cover bg-center flex items-center justify-center'>
      <section className='landing-block flex justify-start items-end'>
         <h1 className=' text-white'>{random()}</h1>
      </section>
    </main>
  )
}

export default LandingPage