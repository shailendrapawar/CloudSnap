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
    <div className='relative allPhoto-body'>

      {favItem.map((v,i) => {

          return <div className='photo-item relative' key={i}>
          <img src={v.src} className='' >
          </img>
          <i className='delete-icon'><MdDelete/></i>
          <i className='fav-icon'>{v.isFav?<AiFillHeart color='red'/>:<AiOutlineHeart  color='red'/>}</i>
          </div>
        
      })}
     

    </div>
  )
}

export default Favourites