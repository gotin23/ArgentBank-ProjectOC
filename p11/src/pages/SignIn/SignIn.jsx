import "./SignIn.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSignIn } from "../../Redux/Reducers/SignInReducer";

import { performApiAction } from "../../service/Api.jsx";
export default function SignIn() {
  const cookieUser = getCookie("email");

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkRemember, setCheckRemenber] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookieUser) {
      setCheckRemenber(true);
      const arr = cookieUser.split(" ");
      setUsername(arr[0]);
      setPassword(arr[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckBox = () => {
    setCheckRemenber(!checkRemember);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await performApiAction("login", null, {
        email: username,
        password: password,
      });
      // Dispatch l'action setSignIn avec le token reçu de l'API
      dispatch(setSignIn({ response }));
      //creation des cookies si checkbox sur true
      if (checkRemember) {
        createCookie("email", username + " " + password, 1);
      }
      // redirection vers son profile
      navigate("/user");
    } catch (error) {
      // Gérer les erreurs de la requête API
      console.log(error);
    }
  };

  function createCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function getCookie(nom) {
    nom = nom + "=";
    let liste = document.cookie.split(";");
    for (let i = 0; i < liste.length; i++) {
      let c = liste[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nom) === 0) return c.substring(nom.length, c.length);
    }
    return null;
  }
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
            <input type="checkbox" id="remember-me" checked={checkRemember} onChange={handleCheckBox} />
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
