import React from 'react'
import './auth.css'

import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineUnlock } from "react-icons/ai";

const RegisterPage = () => {
    return (
        <div className='register-page'>
            <main className='register-body'>
                <section className='register-left'></section>
                <section className='register-right'>
                <h1>Sign up</h1>
                <p>please enter the below details</p>
                    <form className='register-form'>
                        <div className='name-div'><i><FaRegUser /></i><input type='text' placeholder='enter your full name'></input></div>
                        <div className='email-div'><i><MdOutlineMail/></i><input type='email' placeholder='enter your email'></input></div>
                        <div className='number-div'><i><MdLocalPhone /></i><input type='number' placeholder='enter your number'></input></div>
                        <div className='password-div'><i><AiOutlineUnlock /></i><input type='text' placeholder='enter password'></input></div>

                        <aside className='gender-div'>
                            <label>male:</label><input name='gender' value='male' type='radio'></input>
                            <label className='pl-10'>female:</label><input name='gender' value='female' type='radio'></input>
                        </aside>
                        <span className='error-msg text-center'>error msg</span>
                        <button className='signup-btn'>Sign up</button>
                    </form>
                </section>
            </main>
        </div>


    )
}

export default RegisterPage