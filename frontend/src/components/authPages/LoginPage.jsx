import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { AiOutlineUnlock } from "react-icons/ai";
import './auth.css'
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate=useNavigate()
  return (
    <div className='login-page'>
      <main className='login-body'>

        <section className='login-left'>
          <p className='login-link'>New to CloudSnap <b onClick={()=>navigate("/register")}>register here</b>?</p>
        </section>


        <section className='login-right'>
        <h1>Sign-in</h1>
        <p>enter the credentials</p>
          <form className='login-form'>
          <div className='name-div'><i><FaRegUser /></i><input type='text' placeholder='enter email or number'></input></div>
          <div className='password-div'><i><AiOutlineUnlock /></i><input type='text' placeholder='enter password'></input></div>
          
          <span className='error-msg text-center'>error msg</span>
          <button className='loginPage-btn'>Log-IN</button>

          </form>
        </section>
      </main>

    </div>
  )
}

export default LoginPage