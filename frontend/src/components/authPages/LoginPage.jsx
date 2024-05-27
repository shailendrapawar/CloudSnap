import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { AiOutlineUnlock } from "react-icons/ai";
const LoginPage = () => {
  return (
    <div className='login-page'>
      <main className='login-body'>

        <section className='login-left'>
          <p className='login-link'>New to CloudSnap <b>register here</b>?</p>
        </section>


        <section className='login-right'>
        <h1>Sign-in</h1>
        <p>enter the credentials</p>
          <form className='login-form'>
          <div className='name-div'><i><FaRegUser /></i><input type='text' placeholder='enter your full name'></input></div>
          <div className='password-div'><i><AiOutlineUnlock /></i><input type='text' placeholder='enter password'></input></div>
          </form>
        </section>
      </main>

    </div>
  )
}

export default LoginPage