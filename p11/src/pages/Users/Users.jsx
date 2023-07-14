import React from "react";
import "./Users.css";
import Account from "../../components/Account/Account";

export default function Users() {
  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>

      <Account />
      <Account />
      <Account />
    </main>
  );
}
