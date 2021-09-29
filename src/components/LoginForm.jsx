/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/LoginForm.scss'
//importacion de imagenes
import GoogleIcon from '../assets/images/google-icon.png'
import TwitterIcon from '../assets/images/twitter-icon.png'

const LoginForm = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='button' className='button'>Iniciar sesión</button>
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
          {' '}
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

export default LoginForm
