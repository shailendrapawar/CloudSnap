import React from 'react'
import './auth.css'
import axios from 'axios';


import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineUnlock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom"
const RegisterPage = () => {

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [number, setNumber] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [notify, setNotify] = React.useState("")


    const navigate = useNavigate()

    const handleRegister = async (e) => {
        if (email == "" || name == "" || number == "" || password == "") {
            e.preventDefault()
            setNotify("enter all details")
            setTimeout(() => {
                setNotify("")
            }, 2000)
        } else {
            const isCreated=await axios.post(import.meta.env.VITE_API_URL+`/register`,{
                name:name,
                email:email,
                number:number,
                password:password
            })

            if(isCreated.data.status==201){
                setNotify(isCreated.data.msg)
                setTimeout(() => {
                    navigate("/login")
                }, 1000)
                
            }else{
                setNotify(isCreated.data.msg)
                setTimeout(() => {
                    setNotify("")
                }, 2000)
            } 

        }
    }


    return (
        <div className='register-page'>
            <main className='register-body'>
                <section className='register-left'>
                    <p className='login-link'>already a user <b onClick={() => navigate("/login")}>Login instead</b>?</p>
                </section>
                <section className='register-right'>
                    <h1>Sign up</h1>
                    <p>please enter the below details</p>
                    <div className='register-form'>
                        <div className='name-div'><i><FaRegUser /></i><input value={name} onChange={(e) => {
                            e.preventDefault()
                            setName(e.target.value);
                        }} type='text' placeholder='enter your full name'></input></div>
                        <div className='email-div'><i><MdOutlineMail /></i><input type='email' value={email} onChange={(e) => {
                            e.preventDefault()
                            setEmail(e.target.value);
                        }} placeholder='enter your email'></input></div>
                        <div className='number-div'><i><MdLocalPhone /></i><input type='number' value={number} onChange={(e) => {
                            e.preventDefault()
                            setNumber(e.target.value);
                        }} placeholder='enter your number'></input></div>
                        <div className='password-div'><i><AiOutlineUnlock /></i><input type='text' value={password} onChange={(e) => {
                            e.preventDefault()
                            setPassword(e.target.value)
                        }} placeholder='enter password'></input></div>


                        <span className='error-msg text-center h-5'>{notify}</span>
                        <button className='signup-btn' onClick={(e)=>handleRegister(e)}>Sign up</button>
                        <Link to="/login" className='login-btn'>login instead ?</Link>

                    </div>
                </section>
            </main>
        </div>


    )
}

export default RegisterPage