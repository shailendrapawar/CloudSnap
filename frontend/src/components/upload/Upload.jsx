import React, { useState } from 'react'
import './upload.css'
import src from './icon-final.png'
const Upload = () => {

  const [files,setFiles]=useState([])

 const handleChange=(e)=>{
  e.preventDefault();

  const inputFiles=Array.from(e.target.files)
  
  console.log("input files:-",inputFiles)
  inputFiles.map((file,i)=>{
    console.log("map hue",file.name)

  })
  inputFiles.splice(2,1)
  console.log(inputFiles)
 }


  return (
    <main className='upload-body'>
    <section className='upload-block'>

    <label className="upload-left" >
      <input type='file' id='file-input' multiple onChange={(e)=>handleChange(e)} accept='image/*' hidden ></input>
      
      <img src={src}></img>
      <p>Click or Drag and Drop image</p>
    </label>  

    <div className='upload-right'>
      
    </div>

    </section>


    <button className='upload-btn'>Sanp in cloud</button>
    </main>
  )
}

export default Upload