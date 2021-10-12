/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginRequest } from '../actions'
import '../assets/styles/components/LoginForm.scss'
//importacion de imagenes
import GoogleIcon from '../assets/images/google-icon.png'
import TwitterIcon from '../assets/images/twitter-icon.png'

const LoginForm = (props) => {
  // const { history } = props
  const { email, password } = props

  const [form, setValues] = useState({
    email: '',
  })

  const handleInput = (e) => {
    // console.log(e.target.value)
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const submitLoginButton = (e) => {
    e.preventDefault() // evita que se envien los parametros por la url
    // console.log(form)
    props.loginRequest(form)
    // console.log('props', props.state)
    props.history.push('/')
  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={submitLoginButton}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
            value={email}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
            value={password}
          />
          <button type='submit' className='button'>
            Iniciar sesión
          </button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <Link to='/'>Olvidé mi contraseña</Link>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={GoogleIcon} alt='google' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={TwitterIcon} alt='twitter' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'> Regístrate</Link>
        </p>
      </section>
    </section>
  )
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
}

const mapDispatchToProps = {
  loginRequest,
}

// export default LoginForm
export default withRouter(connect(null, mapDispatchToProps)(LoginForm))
