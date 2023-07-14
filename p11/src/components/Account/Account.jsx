import React from "react";
import "./Account.css";

export default function Account() {
  return (
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">Argent Bank Checking (x8349)</h3>
        <p class="account-amount">$2,082.79</p>
        <p class="account-amount-description">Available Balance</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  );
}
