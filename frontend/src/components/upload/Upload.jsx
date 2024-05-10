import React from 'react'
import './upload.css'
import src from './icon-final.png'
const Upload = () => {
  return (
    <main className='upload-body'>
    <section className='upload-block'>

    <label className="upload-left">
      <input type='file' accept='image/*'hidden ></input>
      
      <img src={src}></img>
      <p>Click or Drag and Drop image</p>
    </label>  

    <div className='upload-right'>
      uploading list
    </div>

    </section>


    <button className='upload-btn'>Sanp in cloud</button>
    </main>
  )
}

export default Upload