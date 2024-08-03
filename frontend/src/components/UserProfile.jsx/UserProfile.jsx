import React from 'react'
import './UserProfile.css'
import { useNavigate } from "react-router-dom"
import axios from "axios";

const UserProfile = () => {

  const navigate = useNavigate();

  const [name, setName] = React.useState("--")
  const [email, setEmail] = React.useState("--")
  const [number, setNumber] = React.useState("--")



  const fetchUserData = async (userId) => {
    const isUser = await axios.get(import.meta.env.VITE_API_URL + `/getUser/${userId}`)
  
    if (isUser.data.status == 200) {
      setName(isUser.data.data.name)
      setEmail(isUser.data.data.email)
      setNumber(isUser.data.data.number)
    } else if (userData.data.data == []) {
      navigate("/login")
    }
    else {
      navigate("/login")
    }
  }


  React.useEffect(() => {

    const userId = localStorage.getItem(import.meta.env.VITE_LOCAL_KEY);

    if (userId == null) {
      navigate("/login")
    } else {
      let userId = localStorage.getItem(import.meta.env.VITE_LOCAL_KEY)
      fetchUserData(userId);
    }
  }, [])

  return (
    <main className='user-body flex items-center justify-center bg-[#8e9eab]'>

      <div className='user-block  bg-white flex gap-2.5 overflow-hidden'>

        <div className='user-left flex flex-col justify-evenly items-center'>

          <section className='userLeft-top bg-white flex flex-col justify-between items-center'>
            <img className='userProfile-img bg-slate-400 '></img>
            <div className='profileImg-btn flex justify-center gap-2.5'>
              <button className='removePic-btn bg-white rounded-md'>Remove photo</button>
              <button className='changePic-btn bg-[#222831] text-white rounded-md'>Change photo</button>
            </div>
          </section>

          <section className='userLeft-middle flex items-center justify-evenly'>
            <span className='total-snap text-white bg-[#0194fe]'><label>Total snaps:</label><b>47</b></span>
            <span className='credits-body  text-white bg-[#e32f7a]'><label>Credits Used:</label><b>8%</b></span>
          </section>

          <button onClick={(e) => {
            e.preventDefault();
            navigate("/login")
            localStorage.removeItem(import.meta.VITE_LOCAL_KEY);


          }} className='logout-btn bg-[#ffd600] rounded-md'>Sign Out</button>

        </div>

        <div className='user-right flex flex-col justify-evenly items-end relative pl-2 pr-2'>
          <h1>Account Info</h1>

          <div className='name-body'>
            <label>Name:</label><span>{name}</span>
          </div>

          <div className='email-body'>
            <label>Email:</label><span>{email}</span>
          </div>



          <div className='mobileNo-body '>
            <label>Mobile no:</label><span>{number}</span>
          </div>

          <button className='bg-[#222831] text-white rounded-md h-10'>Update Credentials</button>
        </div>




      </div>


    </main>
  )
}

export default UserProfile