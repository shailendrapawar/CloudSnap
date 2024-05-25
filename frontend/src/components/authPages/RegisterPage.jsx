import React from 'react'
import './auth.css'

const RegisterPage = () => {
    return (
        <div className='register-page'>
            <main className='register-body'>
                <section className='register-left'>left</section>
                <section className='register-right'>
                    <form>
                        <div className='name-div'><i>icon</i><input type='text' placeholder='enter your full name'></input></div>
                        <div className='email-div'><i>icon</i><input type='email' placeholder='enter your email'></input></div>
                        <div className='number-div'><i>icon</i><input type='number' placeholder='enter your number'></input></div>
                        <div className='password-div'><i>icon</i><input type='text' placeholder='enter password'></input></div>
                        <div className='gender-div'>
                            <label>male:</label><input name='gender' value='male' type='radio'></input>
                            <label>female:</label><input name='gender' value='female' type='radio'></input>
                        </div>

                        <div className='error-div'>error msg</div>
                        <button className='signup-btn'>Sign up</button>
                    </form>
                </section>
            </main>
        </div>


    )
}

export default RegisterPage