// Form component

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from '../redux/actions/authActions';
import '../styles/Form.css';

function Form() {
  const dispatch = useDispatch();

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
        body: JSON.stringify({ email, password }), // Send username and password in the request body
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.body.token;

        // Dispatch the loginSuccess action with the token
        dispatch(loginSuccess(token));

        // Optionally, you can store the token in session or local storage
        sessionStorage.setItem("token", token);

      } else {
        // Handle login failure
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
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
        </form>
      </section>
    </main>
  );
}

export default Form;