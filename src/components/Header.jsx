import React from 'react'

import '../assets/styles/components/Headers.scss'
import logo from '../assets/images/logo-platzi-video-BW2.png'
import userIcon from '../assets/images/user-icon.png'

const Header = ({ dest }) => (
  <header className={`header header--${dest}`}>
    <img className='header__img' src={logo} alt='Platzi Video' />
    {window.location.pathname === '/' && (
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
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
