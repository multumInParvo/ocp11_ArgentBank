// Header component

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import '../styles/Header.css';
import argentBankLogo from '../img/argentBankLogo.png';

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.user.userData.userName);
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
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </a>

      {isAuthenticated ? (
        <div className='authenticated'>
          <Link to='/profile'>
            <p>{username}</p>
          </Link>
          <Link to='/' onClick={logoutHandler}>
            <p>Sign out</p>
          </Link>
        </div>

      ) : (

        <div className='notAuthenticated'>
          <Link to='/login' >
            Sign In
          </Link>
        </div>
      )}

    </nav>
  );
}

export default Header;