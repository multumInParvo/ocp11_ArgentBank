// Header component

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/actions/authActions'
import '../styles/Header.css'
import argentBankLogo from '../img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.user.userData?.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    sessionStorage.clear();
    localStorage.clear();
    navigate('/');
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </Link>

      {isAuthenticated ? (
        <div className='authenticated'>
          <Link className='main-nav-item' to='/profile'>
          <FontAwesomeIcon className='faCircleUser' icon={faCircleUser} />
            {username}
          </Link>
          <Link className='main-nav-item' to='/' onClick={logoutHandler}>
          <FontAwesomeIcon className='faRightFromBracket' icon={faRightFromBracket} />
            Sign out
          </Link>
        </div>

      ) : (

        <div className='notAuthenticated'>
          <Link className='main-nav-item' to='/login' >
          <FontAwesomeIcon className='faCircleUser' icon={faCircleUser} />
            Sign In
          </Link>
        </div>
      )}

    </nav>
  );
}

export default Header;