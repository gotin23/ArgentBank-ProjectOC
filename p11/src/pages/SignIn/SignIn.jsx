import "./SignIn.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSignIn } from "../../Redux/Reducers/SignInReducer";
import { performApiAction } from "../../service/Api.jsx";

export default function SignIn() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkRemember, setCheckRemenber] = useState(false);
  const navigate = useNavigate();

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
      // redirection vers son profile
      navigate("/user");
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
        <form className="sign-in-form" onSubmit={handleSignIn}>
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
        <Link className="create-new-account-link" to="/sign-up">
          Create new profile
        </Link>
      </section>
    </main>
  );
}
