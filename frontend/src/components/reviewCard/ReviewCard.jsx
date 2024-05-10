import React from 'react'
import './reviewCard.css'
const ReviewCard = ({ data }) => {

  const randomColor = () => {
    const colorArr2 = ["Crimson", "#8B0000", "#FF1493", "#C71585", "#DB7093", "#FF6347", "#DA70D6", "#FF00FF", "#BA55D3", "#9370DB", "#663399", "#8B008B", "#6A5ACD", "#32CD32", "#00FF7F", "#228B22", "#66CDAA", "#20B2AA", "#4169E1", "#800000"]
    const random = Math.floor(Math.random() * 20)
    return colorArr2[random]
  }

  function setTitle(rate) {

    switch (rate) {
      case 1:
        return " Very Poor"
        break;
      case 2:
        return "Poor"
        break;
      case 3: return "Average"
        break;
      case 4: return "Loved it"
        break;
      case 5: return "Awesome"
        break;
      default: return "Not Specified"
    }

  }
  return (

    <article className='reviewCard-body m-5 flex flex-col justify-evenly bg-black cursor-pointer text-white ' style={{ backgroundColor: randomColor() }}  >
      <section className='reviewCard-top flex justify-end pr-2.5'>
        <span>{data.rate}</span><div className=' h-6 bg-center bg-no-repeat w-6 bg-contain'> </div>
      </section>
      <section className='reviewCard-middle flex flex-col justify-evenly pl-2.5 pr-2.5'>
        <h3>{setTitle(data.rate)}</h3>
        <p className=' italic min-h-16 pl-2.5 break-all text-wrap overflow-hidden text-ellipsis '>{data.review}</p>

      </section>

      <figure className='reviewCard-bottom flex gap-2.5 pl-1'>
        <img className='h-16 w-16 bg-slate-400 bg-cover'></img>
        <figcaption className='flex items-center'>{data.name}</figcaption>
      </figure>

    </article>
  )
}

export default ReviewCard