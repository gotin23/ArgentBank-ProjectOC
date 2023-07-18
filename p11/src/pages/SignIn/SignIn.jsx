import "./SignIn.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../../Redux/Reducers/SignInReducer";
export default function SignIn() {
  const token = useSelector((state) => state.signIn);

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    // appel a l'api pour recuperer le token
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: username,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      // recuperation du token
      const tkn = response.data.body.token;
      console.log(tkn);
      // Dispatch l'action setSignIn avec le token reçu de l'API
      dispatch(setSignIn({ tkn }));
      // redirection vers son profile
      navigate("/users");
      console.log(token, "api");
    } catch (error) {
      // Gérer les erreurs de la requête API
      console.log(error);
    }
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
