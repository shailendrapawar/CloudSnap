import React, { useEffect, useRef, useState } from 'react'
import './upload.css'
import src from './icon-final.png'
import UploadList from './UploadList'
const Upload = () => {
  let list;
  let inputFiles;

  const [finalList, setFinalList] = useState([])
  const parent=useRef(null)

  useEffect(()=>{

    const dropArea=document.getElementById("upload-left")
    dropArea.addEventListener("dragover",(e)=>{
      e.preventDefault()
    })
    dropArea.addEventListener("drop",(e)=>{
      e.preventDefault();
      inputFiles=Array.from(e.dataTransfer.files)
      console.log(inputFiles)
    
      list = inputFiles.map((file, i) => {
        return <UploadList key={i} data={file} index={i} />
      })
      
  
      setFinalList(list)
      
    })
  },[])
  

  const handleChange = (e) => {
    e.preventDefault()
     inputFiles = Array.from(e.target.files)
    list = inputFiles.map((file, i) => {
      return <UploadList key={i} data={file} index={i} />
    })

    setFinalList(list)
  }

  return (
    <main className='upload-body'>
      <section className='upload-block'>

        <label className="upload-left" id='upload-left' >
          <input type='file' id='file-input' multiple  onChange={(e) => {handleChange(e)}} accept='image/*' hidden ></input>

          <img src={src}></img>
          <p className='text-center'>Click Here or <br/> Drag and Drop images</p>
        </label>

        <div className='upload-right' id='listBody' ref={parent} >
          {
            finalList
          }

        </div>

      </section>


      <button className='upload-btn'>Sanp in cloud</button>
    </main>
  )
}

export default Upload