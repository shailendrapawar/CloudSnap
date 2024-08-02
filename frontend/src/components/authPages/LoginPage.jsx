import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { AiOutlineUnlock } from "react-icons/ai";
import './auth.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const LoginPage = () => {


  const navigate = useNavigate();
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [notify, setNotify] = React.useState("")


  const handleLogin = async () => {

    if (email == "" || password == "") {
      setNotify("enter all details")
      setTimeout(() => {
        setNotify("")
      }, 2000)
    } else {
      const isUser = await axios.post(import.meta.env.VITE_API_URL + `/login`, {
        email: email,
        password: password
      })
      if (isUser.data.status == "200") {
        setNotify(isUser.data.msg)
        localStorage.setItem(import.meta.env.VITE_LOCAL_KEY, isUser.data.user._id)
        setPassword("")
        setEmail("")
        setTimeout(() => {
          navigate("/")
        }, 1000)
      } else {
        setNotify(isUser.data.msg);
        setTimeout(() => {
          setNotify("")
        }, 2000)
      }
    }


  }

  React.useEffect(() => {

    localStorage.removeItem(import.meta.env.VITE_LOCAL_KEY)
  }, [])


  return (
    <div className='login-page'>
      <main className='login-body'>

        <section className='login-left'>
          <p className='login-link'>New to CloudSnap <b onClick={() => navigate("/register")}>register here</b>?</p>
        </section>


        <section className='login-right'>
          <h1>Sign-in</h1>
          <p>enter the credentials</p>
          <div className='login-form' >
            <div className='name-div'><i><FaRegUser /></i><input type='text' value={email} onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }} placeholder='enter email or number'></input></div>
            <div className='password-div'><i><AiOutlineUnlock /></i><input type='text' value={password} onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }} placeholder='enter password'></input></div>

            <b className='error-msg text-center h-5 '>{notify}</b>
            <button onClick={() => handleLogin()} className='loginPage-btn'>Log-IN</button>

          </div>
        </section>
      </main>

    </div>
  )
}

export default LoginPage