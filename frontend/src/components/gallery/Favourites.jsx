import React from 'react'
import { MdDelete } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
const Favourites = () => {

  const photos = [
    {
      src: "/photos/photo1.png",
      isFav: false
    },
    {
      src: "/photos/photo2.png",
      isFav: true
    },
    {
      src: "/photos/photo3.png",
      isFav: true
    }
    ,
    {
      src: "/photos/photo4.png",
      isFav: true
    },
    {
      src: "/photos/photo5.png",
      isFav: false
    },
    {
      src: "/photos/photo6.png",
      isFav: false
    }
    ,
    {
      src: "/photos/photo4.png",
      isFav: true
    },
    {
      src: "/photos/photo5.png",
      isFav: true
    },
    {
      src: "/photos/photo6.png",
      isFav: false
    }
  ]

  let favItem=photos.filter((v)=>{
    return v.isFav==true
  })
  return (
    <div className='relative allPhoto-body  flex flex-wrap gap-7 justify-center overflow-y-scroll pt-2.5 pb-2.5'>

      {favItem.map((v,i) => {

          return <div className='photo-item relative overflow-hidden cursor-pointer' key={i}>
          <img src={v.src} className='object-cover' >
          </img>
          <i className='delete-icon absolute bottom-0 right-0 h-8 grid items-center bg-white '><MdDelete/></i>
          <i className='fav-icon absolute  bottom-0 left-0 grid items-center bg-white '>{v.isFav?<AiFillHeart color='red'/>:<AiOutlineHeart  color='red'/>}</i>
          </div>
        
      })}
     

    </div>
  )
}

export default Favourites