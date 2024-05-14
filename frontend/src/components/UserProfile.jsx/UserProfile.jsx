import React from 'react'
import './userProfile.css'
const UserProfile = () => {
  return (
    <main className='user-body'>

      <div className='user-block'>

        <div className='user-left'>

          <section className='userLeft-top'>
            <img className='userProfile-img'></img>
            <div className='profileImg-btn'>
              <button className='removePic-btn'>Remove photo</button>
              <button className='changePic-btn'>Change photo</button>
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