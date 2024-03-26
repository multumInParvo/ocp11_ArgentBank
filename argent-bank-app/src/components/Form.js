// Form component

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailed } from '../redux/actions/authActions';
import '../styles/Form.css';

function Form() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null); // State to store error message

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      // Make a fetch request to your login API endpoint
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
        setErrorMessage(null);

      } else {
        setErrorMessage("Invalid credentials");
        dispatch(loginFailed("Invalid credentials")); 
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred."); // Set generic error message
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
            <input type="text" id="email" name="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">Sign In</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Render error message if any */}
        </form>
      </section>
    </main>
  );
}

export default Form;