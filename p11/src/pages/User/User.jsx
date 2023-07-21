import React from "react";
import "./User.css";
import Account from "../../components/Account/Account";
import EditName from "../../components/EditName/EditName";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { getProfile } from "../../service/Api";
import { setGetProfile } from "../../Redux/Reducers/ProfileUserReducer";
import { performApiAction } from "../../service/Api";

export default function Users() {
  const token = useSelector((state) => state.signIn.token);
  const dataUser = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const [toggleEditName, setToggleEditName] = useState(false);
  console.log(dataUser);
  useEffect(() => {
    const fetchData = async () => {
      //recuperation de la data utilisateur
      try {
        const data = await performApiAction("getProfile", token, {});
        console.log(data);
        dispatch(setGetProfile({ data }));
        console.log(dataUser);
      } catch (error) {
        console.log(error, "error");
        // Gère les erreurs de l'appel API
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditName = () => {
    setToggleEditName(!toggleEditName);
    console.log(toggleEditName);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {dataUser.firstName + " " + dataUser.lastName + " !"}
        </h1>
        <button className="edit-button" onClick={handleEditName}>
          Edit Name
        </button>
        {toggleEditName && <EditName onSubmit={handleEditName} />}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
      <Account />
      <Account />
    </main>
  );
}
