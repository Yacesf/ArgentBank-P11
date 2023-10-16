import React, { useState } from "react";
import "./index.css";
import { loginUser } from "../../services/fetch/loginUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainSignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(loginUser({ email, password }));

      if (response && response.ok) {
        navigate("/profile");
      } else {
        throw new Error("User not found or other error.");
      }
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
          <div id="error">{error}</div>
        </form>
      </section>
    </main>
  );
}

export default MainSignIn;
