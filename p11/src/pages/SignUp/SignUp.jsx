import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { performApiAction } from "../../service/Api";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const valideUsername = username.length >= 4 ? true : false;
  const valideFirstName = firstName.length >= 2 ? true : false;
  const valideLastName = lastName.length >= 2 ? true : false;
  const validePassword = password.length >= 5 ? true : false;
  const valideEmail = email.length >= 5 ? true : false;
  const validePasswordConfirmation = password.length >= 5 && password === passwordConfirmation ? true : false;

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage(true);
    // si toutes mes valides constantes sont sur true ont envois les donnees du nouvel utilisateur sur l'api
    if (valideUsername && valideFirstName && valideLastName && validePassword && valideEmail && validePasswordConfirmation) {
      console.log("conecté");
      try {
        await performApiAction("signUp", null, { email: email, password: password, firstName: firstName, lastName: lastName, userName: username });
        navigate("/");
      } catch (error) {
        console.log(error, "error");
      }
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="input-wrapper">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {!valideFirstName && errorMessage && <p>le prenom doit contenir au moins 2 caractéres</p>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {!valideLastName && errorMessage && <p>le nom doit contenir au moins 2 caractéres</p>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            {!valideUsername && errorMessage && <p>le nom d'utilisateur doit contenir au moins 5 caractéres</p>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password.password} onChange={(e) => setPassword(e.target.value)} />
            {!validePassword && errorMessage && <p>le mot de passe doit contenir au moins 5 caractéres</p>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="passwordConfirmation">Confirm password</label>
            <input type="password" id="passwordConfirmation" value={password.passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            {!validePasswordConfirmation && errorMessage && <p>doit etre egale au mot de passe</p>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {!valideEmail && errorMessage && <p>l'email doit contenir au moins 5 caractéres</p>}
          </div>
          <button type="submit" className="sign-in-button">
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}
