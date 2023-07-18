import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logoHeader from "../../assets/img/argentBankLogo.png";
import { setSignIn } from "../../Redux/Reducers/SignInReducer";

export default function Header() {
  const token = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("logout");
    if (token) {
      console.log("tt");
      const tnk = "";
      dispatch(setSignIn({ tnk }));
      console.log(token);
    }
  };
  console.log(token);
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img className="main-nav-logo-image" src={logoHeader} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <Link className="main-nav-item" to="./sign-in" onClick={handleLogout}>
          <i className="fa fa-user-circle"></i>
          {token.token ? "Logout" : "Sign-in"}
        </Link>
      </div>
    </nav>
  );
}
