import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const Login = ({ setLogin, url }) => {

     const [data, setdata] = useState({
        email: "",
        password: ""
    })
    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setdata(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
        e.preventDefault()

        let newUrl = url + "/api/adminuser/login"
        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            localStorage.setItem("token", response.data.token)
            setLogin(true)
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)
        }
    }
  

    return (
        <div className='login'>
            <form onSubmit={onLogin} className="login-form">
                <h1>Login</h1>
                <div className="login-inputs">
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
