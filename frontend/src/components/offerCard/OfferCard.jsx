import React from 'react'
import './offerCard.css'
const OfferCard = (prop) => {

  const data = prop.data;

  return (
    <article className='offer-card-body cursor-pointer bg-cover  text-white' style={{ backgroundImage: data.img }}>
      <div className='desc-body flex flex-col justify-around p-2.5'>
      <h2 id='offerCard-heading' className=' text-center underline'>{data.title}</h2>
      <p id='offerCard-para' className='offer-desc text-slate-300 text-center overflow-hidden w-auto'>{data.desc}</p>
      </div>
    </article>
  )

}

export default OfferCard