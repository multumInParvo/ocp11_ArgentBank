// Header component

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import '../styles/Header.css';
import argentBankLogo from '../img/argentBankLogo.png';

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.token);
  const firstname = useSelector((state) => state.user.userData.firstName);
  const lastname = useSelector((state) => state.user.userData.lastName);
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
            <p>{firstname} {lastname}</p>
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