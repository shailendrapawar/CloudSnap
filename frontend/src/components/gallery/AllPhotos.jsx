import React from 'react'
import src from './photos/photo1.png'
const AllPhotos = () => {


  const photos=[
    {
      src:"/photos/photo1.png",
      isFav:true
    },
    {
      src:"/photos/photo2.png",
      isFav:true
    },
    {
      src:"/photos/photo3.png",
      isFav:true
    }
    ,
    {
      src:"/photos/photo4.png",
      isFav:true
    },
    {
      src:"/photos/photo5.png",
      isFav:true
    },
    {
      src:"/photos/photo6.png",
      isFav:true
    }
  ]


  console.log(photos)
  
  return (
    <div className='relative allPhoto-body'>
    {photos.map((v)=>{
    
      return <img src={v.src} ></img>

    })}

    </div>
  )
}

export default AllPhotos