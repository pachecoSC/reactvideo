import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../assets/styles/components/Headers.scss'
import logo from '../assets/images/logo-platzi-video-BW2.png'
import userIcon from '../assets/images/user-icon.png'
import gravatar from '../utils/gravatar'

const Header = (props) => {
  console.log(props)
  const { dest, users } = props

  const hasUser = Object.keys(users).length > 0 // ya que users es un objeto se usa object.keys para tratarlo como un array y poder obtener su tamaño
  console.log(hasUser)
  const perfil = (hasUser) ? users.email : 'Invitado'
  return (
    <header className={`header header--${dest}`}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      {window.location.pathname === '/' && (
        <div className='header__menu'>
          <div className='header__menu--profile'>
            <Link to='/login'>
              { hasUser ?
                <img src={gravatar(users.email)} alt={users.email} /> :
                <img src={userIcon} alt='' /> }
            </Link>
            <p>{perfil}</p>
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
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}
// export default Header
export default connect(mapStateToProps, null)(Header)
