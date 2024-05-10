import React from 'react'
import './offerCard.css'
const OfferCard = (prop) => {

  const data = prop.data;

  return (
    <article className='offer-card-body' style={{ backgroundImage: data.img }}>
      <div className='desc-body'>
      <h2 id='offerCard-heading'>{data.title}</h2>
      <p id='offerCard-para' className='offer-desc text-slate-300'>{data.desc}</p>
      </div>
    </article>
  )

}

export default OfferCard