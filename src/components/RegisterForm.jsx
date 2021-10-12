import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { registerRequest } from '../actions'
import '../assets/styles/components/RegisterForm.scss'

const RegisterForm = (props) => {
  const { name, email, password } = props
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInput = (e) => {
    // console.log(e.target.value)
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    console.log('form', form)
    props.registerRequest(form)
    props.history.push('/')
  }

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmitRegister}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            value={name}
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            value={email}
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            value={password}
            onChange={handleInput}
          />
          <button type='submit' className='button'>
            Registrarme
          </button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  )
}

RegisterForm.prototype = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}
const mapDispatchToProps = {
  registerRequest,
}

// export default RegisterForm
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterForm))
