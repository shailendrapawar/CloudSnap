import React, { useEffect, useRef, useState } from 'react'
import './upload.css'
import src from './icon-final.png'
import UploadList from './UploadList'
const Upload = () => {
  let list;

  const [finalList, setFinalList] = useState([])
  const parent=useRef(null)

 

  const handleChange = (e) => {
    e.preventDefault()
    const inputFiles = Array.from(e.target.files)
    list = inputFiles.map((file, i) => {
      return <UploadList key={i} data={file} index={i} />
    })

    setFinalList(list)
  }
  console.log(parent)

  return (
    <main className='upload-body'>
      <section className='upload-block'>

        <label className="upload-left" >
          <input type='file' id='file-input' multiple onChange={(e) => {handleChange(e)}} accept='image/*' hidden ></input>

          <img src={src}></img>
          <p>Click or Drag and Drop image</p>
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