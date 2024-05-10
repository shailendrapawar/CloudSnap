import React from 'react'
import './pages.css'
import LandingPage from './LandingPage'
import getStartedImg from './homeAssets/get-started-image.png'
import OfferCard from '../offerCard/OfferCard'
import ReviewCard from '../reviewCard/ReviewCard'
import Footer from '../footer/Footer'
const Home = () => {

  const getStartedHeading = "“Unlock the magic of our website”"
  const getStartedPara1 = "Your memories, always secure and at your fingertips! Never losing a precious photo again – with us"
  const getStartedPara2 = "From family fun to professional portfolios, our platform makes organizing and accessing your images a breeze. Join us and make your memories last a lifetime!"

  const reviewData=[
    {
      name:"Shailu pawar",
      review:"fantastic app which i evere saw",
      rate:5
    },
      {
        name:"kanak pawar",
        review:"ffirst timetry kra h bc kaise du review abhise",
        rate:4
      },{
        name:"Bhagwati pawar",
        review:"liked it averga jaisa",
        rate:3
      },
      {
        name:"Deepak pawar",
        review:"Pata he nhi chala kya kaise kya krna h",
        rate:2
      },
      {
        name:"sharad pawar",
        review:"dono chutiye h bc m sai batara hu ,, vrna insu gandu app main aaj tk nhi dekh",
        rate:1
      }
    
  ]
  const cardData=[
    {
      title:"Easy to use",
      desc:"we provide a user friendly interface, through which we deliever optimum service",
      img:`url("./easy-to-use.png")`
    },
    {
      title:"Secure Platform",
      desc:"We ensure the security and privacy of each user,and make sure to safegaurd all data",
      img:`url("./secure-platform.png")`

    },
    {
      title:"Better organisation",
      desc:"With an enourmous storage we ensure the proper and effectiev storage management for the user's data",
     img:`url("./better-organization.png")`
    }
  ]
  return (
    <div className='home-body'>
      <LandingPage />
      <div className=' h-5 bg-black'></div>

      <div className='get-started-body'>
      <h2 className='text-center font-extrabold h-auto w-full'>Getting Started</h2>

        <figure className='get-started-block'>
          <img src={getStartedImg} className='get-started-img h-full w-full'></img>

          <figcaption className='get-started-desc'>
            <h1 className=' font-semibold'>{getStartedHeading}</h1>
            <p className=' text-slate-200'>{getStartedPara1}</p>
            <p className=' text-slate-200'>{getStartedPara2}</p>
            <button className=' h-10 w-32 rounded-md bg-yellow-400 text-black hover:w-40'>Try now</button>
          </figcaption>
        </figure>

      </div>


      <div className='whatWeOffer-body'>
        <h1>What we offer</h1>
        <div className='whatWeOffer-block'>
        {
          cardData.map((v,i)=>{
            return <OfferCard key={i} data={v}/>
          })
        }
          
        </div>
      </div>

      <div className='review-body'>
      <h2>People connected with US...</h2>
      <main className='review-block'>
      {reviewData.map((v,i)=>{
        return <ReviewCard key={i} data={v}/>
      })}


      </main>
      </div>
      <aside onClick={()=>window.scrollTo({
        top:0,left:0,behavior:'smooth'
      })} className=' bg-blue-500 h-9 text-center grid items-center text-white'>Scroll To Top</aside>
      <Footer></Footer>



    </div>
  )
}

export default Home