import React from "react";
import "./Header.css";
import logoHeader from "../../assets/img/argentBankLogo.png";

export default function Header() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img className="main-nav-logo-image" src={logoHeader} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}
