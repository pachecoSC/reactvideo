import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Headers.scss'
import logo from '../assets/images/logo-platzi-video-BW2.png'
import userIcon from '../assets/images/user-icon.png'

const Header = ({ dest }) => (
  <header className={`header header--${dest}`}>
    <Link to='/'>
      <img className='header__img' src={logo} alt='Platzi Video' />
    </Link>
    {window.location.pathname === '/' && (
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <Link to='/login'><img src={userIcon} alt='' /></Link>
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <a href='/'>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    )}
  </header>
)

export default Header
