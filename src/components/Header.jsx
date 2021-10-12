import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'

import '../assets/styles/components/Headers.scss'
import logo from '../assets/images/logo-platzi-video-BW2.png'
import userIcon from '../assets/images/user-icon.png'
import gravatar from '../utils/gravatar'

const Header = (props) => {
  // console.log(props)
  const { dest, users } = props

  const handleLogout = () => {
    props.logoutRequest({})
  }

  const hasUser = Object.keys(users).length > 0 // ya que users es un objeto se usa object.keys para tratarlo como un array y poder obtener su tamaño
  // console.log(hasUser)
  const perfil = (!hasUser) ? 'Invitado' : (users.name !== undefined) ? users.name : 'dummi'
  return (
    <header className={`header header--${dest}`}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      {window.location.pathname === '/' && (
        <div className='header__menu'>
          <div className='header__menu--profile'>
            {hasUser ? (
              <img src={gravatar(users.email)} alt={users.email} />
            ) : (
              <img src={userIcon} alt='' />
            )}
            <p>{perfil}</p>
          </div>
          <ul>
            {!hasUser ? (
              <li>
                <Link to='/login'>Iniciar Sesión</Link>
              </li>
            ) : (
              <li>
                <Link to='/' onClick={handleLogout}>Cerrar Sesión</Link>
              </li>
            )}
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
const mapDistpachToProps = {
  logoutRequest,
}
// export default Header
export default connect(mapStateToProps, mapDistpachToProps)(Header)
