import React from 'react'

import '../assets/styles/App.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'
import RegisterForm from '../components/RegisterForm'

const Register = () => (
  <div className='App'>
    <Header dest='login' />
    <RegisterForm />
    <Footer />
  </div>
)

export default Register
