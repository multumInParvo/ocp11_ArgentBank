// Form component

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailed } from '../redux/actions/authActions';
import '../styles/Form.css';

function Form() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.body.token;
        dispatch(loginSuccess(token)); 
        sessionStorage.setItem("token", token);
        navigate('/profile'); 

      } else {
        setErrorMessage("Invalid credentials");
        dispatch(loginFailed("Invalid credentials")); 
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred."); 
    }
  };

  return (
    <main className="main">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">Sign In</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>} 
        </form>
      </section>
    </main>
  );
}

export default Form;