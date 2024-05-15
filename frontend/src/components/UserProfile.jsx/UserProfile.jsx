import React from 'react'
import './userProfile.css'
const UserProfile = () => {
  return (
    <main className='user-body flex items-center justify-center bg-[#8e9eab]'>

      <div className='user-block  bg-white flex gap-2.5 overflow-hidden'>

        <div className='user-left flex flex-col justify-evenly items-center'>

          <section className='userLeft-top bg-white flex flex-col justify-between items-center'>
            <img className='userProfile-img bg-slate-400 '></img>
            <div className='profileImg-btn flex justify-center gap-2.5'>
              <button className='removePic-btn'>Remove photo</button>
              <button className='changePic-btn bg-[#222831] text-white rounded-md'>Change photo</button>
            </div>
          </section>

          <section className='userLeft-middle'>
            <span className='total-snap'><label>Total snaps:</label><b>47</b></span>
            <span className='credits-body'><label>Credits Used:</label><b>8%</b></span>
          </section>

          <button className='logout-btn'>Sign Out</button>

        </div>





        <div className='user-right'>
          <h1>Account Info</h1>

          <div className='name-body'>
            <label>Name:</label><span>shailendra pawar</span>
          </div>

          <div className='email-body'>
            <label>Email:</label><span>shailendrapawar980@gmail.com</span>
          </div>

          <div className='gender-age-body'>
            <section>
              <label>Gender:</label><span >Male</span>
            </section>

            <section>
              <label>Age:</label><span>18</span>
            </section>
          </div>

          <div className='mobileNo-body'>
            <label>Mobile no:</label><span>7456920792</span>
          </div>

          <button>Update Credentials</button>
        </div>




      </div>


    </main>
  )
}

export default UserProfile