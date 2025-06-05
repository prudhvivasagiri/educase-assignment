import React from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Home = () => {
    const navigate = useNavigate()

    const handleCreateAccount = () => {
        navigate('/signup')
    }

    const handleLogin = () => {
        navigate('/login')
    }

  return (
    <div className='home-container'>
        <div className='home-inner-container'>
        <h1>Welcome to Popx</h1>
        <p>Lorem ipsum dolor sit emt,<br/> consectetur adipiscing elit,</p>
        <button onClick={handleCreateAccount} className='create-account-button'>Create Account</button>
        <button onClick={handleLogin} className='login-button'>Already Registered? Login</button>
        </div>
    </div>
  )
}

export default Home