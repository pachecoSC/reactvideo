import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

const Login = () => (
  <div className='App'>
    <Header dest='login' />
    <LoginForm />
    <Footer />
  </div>
)

export default Login
