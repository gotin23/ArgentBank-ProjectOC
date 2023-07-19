import "./SignIn.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSignIn } from "../../Redux/Reducers/SignInReducer";
import { login } from "../../service/Api";
export default function SignIn() {
  const token = useSelector((state) => state.signIn);
  const cookieUser = getCookie("email");
  const cookieRemember = getCookie("rememberMe");

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkRemember, setCheckRemenber] = useState(false);
  const navigate = useNavigate();

  // fonction pour remplir les input si cookie present
  useEffect(() => {
    if (cookieUser) {
      setCheckRemenber(true);
      const arr = cookieUser.split(" ");
      setUsername(arr[0]);
      setPassword(arr[1]);
    }
  }, []);

  const handleCheckBox = () => {
    setCheckRemenber(!checkRemember);
  };

  // const handleSignIn = async (e) => {
  //   e.preventDefault();

  //   // appel a l'api pour recuperer le token
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3001/api/v1/user/login",
  //       {
  //         email: username,
  //         password: password,
  //       },
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     // recuperation du token
  //     const tkn = response.data.body.token;
  //     console.log(tkn, "tt");
  //     // Dispatch l'action setSignIn avec le token reçu de l'API
  //     dispatch(setSignIn({ tkn }));
  //     // redirection vers son profile
  //     createCookie("email", username + " " + password, 1);
  //     navigate("/user");
  //     console.log(token, "api");
  //   } catch (error) {
  //     // Gérer les erreurs de la requête API
  //     console.log(error);
  //   }
  // };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      console.log(response, "tkn");
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
    var liste = document.cookie.split(";");
    for (var i = 0; i < liste.length; i++) {
      var c = liste[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nom) == 0) return c.substring(nom.length, c.length);
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
