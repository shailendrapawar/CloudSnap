import React, { useRef } from 'react'
import './upload.css'
import { FaDeleteLeft } from "react-icons/fa6";


const UploadList = (prop) => {
    function checkIndex(index){
        if(index%2==0){
            return false
        }
        return  true
    }
    const child=useRef()
   
    const imgUrl=URL.createObjectURL(prop.data);
    console.log(prop.data.size)
  return (
    <div className='list-body relative'  ref={child} >
     <img className='' src={imgUrl}></img>
     <p className='text-white'>{prop.data.name}</p><br/><p className=' absolute right-3 text-slate-100 '>{Math.floor(prop.data.size/1000000)} MB</p>
    </div>
  )
}

export default UploadList