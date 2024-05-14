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
            <input type='range' className='credentialRange'></input>
            <input type='range' value={20} className='credentialRange'></input>
          </section>

          <button className='logout-btn'>Sign Out</button>

        </div>





        <div className='user-right'>
          <h1>Account Info</h1>

          <div className='name-body'>
            <label>Name:</label><input></input>
          </div>

          <div className='email-body'>
            <label>Email:</label><input></input>
          </div>

          <div className='gender-age-body'>
            <section>
              <label>Gender:</label><input ></input>
            </section>

            <section>
              <label>Age:</label><input></input>
            </section>
          </div>

          <div className='mobileNo-body'>
            <label>Mobile no:</label><input></input>
          </div>

          <button>Update Credentials</button>
        </div>

        


      </div>


    </main>
  )
}

export default UserProfile