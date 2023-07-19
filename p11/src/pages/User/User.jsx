import React from "react";
import "./User.css";
import Account from "../../components/Account/Account";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getProfile } from "../../service/Api";
import { setGetProfile } from "../../Redux/Reducers/ProfileUserReducer";

export default function Users() {
  const token = useSelector((state) => state.signIn.token);
  const dataUser = useSelector((state) => state.profile);
  console.log(document.cookie);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("entre dans le useEffect");
    const fetchData = async () => {
      //recuperation de la data utilisateur
      try {
        const response = await getProfile(token);
        const data = await response.json();
        dispatch(setGetProfile({ data }));
        console.log(dataUser);
      } catch (error) {
        console.log(error);
        // Gère les erreurs de l'appel API
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   console.log("entre dans le useEffect");
  //   const fetchData = async () => {
  //     //recuperation de la data utilisateur
  //     try {
  //       const response = await fetch("http://localhost:3001/api/v1/user/profile", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       const data = await response.json();
  //       console.log(data.body, "api profile");
  //       dispatch(setGetProfile({ data }));
  //     } catch (error) {
  //       console.log(error);
  //       // Gère les erreurs de l'appel API
  //     }
  //   };
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {dataUser.firstName + " " + dataUser.lastName + " !"}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>

      <Account />
      <Account />
      <Account />
    </main>
  );
}
