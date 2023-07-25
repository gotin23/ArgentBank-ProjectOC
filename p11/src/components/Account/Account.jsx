import React from "react";
import "./Account.css";

export default function Account({ state }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{state.account}</h3>
        <p className="account-amount">{state.balance}</p>
        <p className="account-amount-description">{state.status}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}
