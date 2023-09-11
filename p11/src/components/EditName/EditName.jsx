import React from "react";
import "./EditName.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUserName } from "../../Redux/Reducers/ProfileUserReducer";
import { performApiAction } from "../../service/Api";

export default function EditName({ onSubmit }) {
  const dataUser = useSelector((state) => state.profile);
  const token = useSelector((state) => state.signIn.token);
  const [editUserName, setEditUserName] = useState(dataUser.userName);
  const dispatch = useDispatch();

  const ChangeUserName = async (e) => {
    e.preventDefault();

    try {
      await performApiAction("editUser", token, { userName: editUserName });

      onSubmit();

      dispatch(setNewUserName({ editUserName }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="editName-content">
      <h1>Edit your username</h1>
      <form onSubmit={ChangeUserName}>
        <div className="input-wrapper">
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" defaultValue={editUserName} onChange={(e) => setEditUserName(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={dataUser.firstName} readOnly />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={dataUser.lastName} readOnly />
        </div>

        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
}
