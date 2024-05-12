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

    // function bytesToMegabytes(bytesString) {
    //     // Convert the input string to a number
    //     const bytes = parseInt(bytesString, 10);
    
    //     // Check if the conversion is successful
    //     if (isNaN(bytes)) {
    //         console.error("Input is not a valid number.");
    //         return;
    //     }
    
    //     // Perform the conversion and round the result to 1 decimal place
    //     const megabytes = (bytes / (1024 * 1024)).toFixed(1);
    //     return parseFloat(megabytes); // Convert back to a number
    // }


    function bytesToMegabytes(bytesString) {
        // Convert the input string to a number
        const bytes = parseInt(bytesString, 10);
    
        // Check if the conversion is successful
        if (isNaN(bytes)) {
            console.error("Input is not a valid number.");
            return;
        }
    
        // Perform the conversion
        let result;
        if (bytes < 1024 * 1024) {
            // If less than 1 MB, return size in KB
            result = (bytes / 1024).toFixed(1) + " KB";
        } else {
            // Otherwise, return size in MB rounded to 1 decimal place
            result = (bytes / (1024 * 1024)).toFixed(1) + " MB";
        }
        return result;
    }

    
    const child=useRef()
    const imgUrl=URL.createObjectURL(prop.data);

  return (
    <div className='list-body relative bg-[#76ABAE] flex items-center gap-2 pl-1 h-20'  ref={child} >
     <img className=' bg-white bg-contain h-16 w-16' src={imgUrl}></img>
     <p className='text-white'>{prop.data.name}</p><br/><p className=' absolute right-3 text-slate-300 '>{bytesToMegabytes(prop.data.size)}</p>
    </div>
  )
}

export default UploadList