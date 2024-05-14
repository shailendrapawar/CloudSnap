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
        <div className='user-right'>user irght </div>

      </div>


    </main>
  )
}

export default UserProfile