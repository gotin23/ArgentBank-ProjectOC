import React from "react";
import "./Account.css";

export default function Account({ state }) {
  return (
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">{state.account}</h3>
        <p class="account-amount">{state.balance}</p>
        <p class="account-amount-description">{state.status}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  );
}
