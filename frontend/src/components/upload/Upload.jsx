import React, { useEffect, useRef, useState } from 'react'
import './upload.css'
import src from './icon-final.png'
import UploadList from './UploadList'
const Upload = () => {
  let list;
  let inputFiles;
  const [fileCount, setFileCount] = useState(0)
  const [finalList, setFinalList] = useState([])
  const parent = useRef(null)

  useEffect(() => {

    const dropArea = document.getElementById("upload-left")
    dropArea.addEventListener("dragover", (e) => {
      e.preventDefault()
    })
    dropArea.addEventListener("drop", (e) => {
      e.preventDefault();
      inputFiles = Array.from(e.dataTransfer.files)

      list = inputFiles.map((file, i) => {
        return <UploadList key={i} data={file} index={i} />
      })
      setFileCount(list.length)
      setFinalList(list)

    })
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    inputFiles = Array.from(e.target.files)
    list = inputFiles.map((file, i) => {
      return <UploadList key={i} data={file} index={i} />
    })

    setFinalList(list)
    setFileCount(list.length)
  }

  return (
    <main className='upload-body bg-[#D9D9D9] flex flex-col justify-evenly items-center'>
      <section className='upload-block  bg-[#D9D9D9] flex justify-center items-center gap-5 pr-1.5 pl-1.5 '>

        <label className="upload-left grid place-content-center bg-[#145374] text-white pb-2" id='upload-left' >
          <input type='file' id='file-input' multiple onChange={(e) => { handleChange(e) }} accept='image/*' hidden ></input>

          <img className='h-48 w-48' src={src}></img>

          <p className='text-center text-slate-300'>Click Here or <br /> Drag and Drop images</p><br></br><p>FILE_COUNT : <b className='text-yellow-400'>{fileCount}</b></p>

        </label>

        <div className='upload-right' id='listBody' ref={parent} >
          {
            finalList
          }
        </div>
      </section>

      <button className='upload-btn bg-[#FFD600] rounded-md'>Snap in cloud</button>
    </main>
  )
}

export default Upload