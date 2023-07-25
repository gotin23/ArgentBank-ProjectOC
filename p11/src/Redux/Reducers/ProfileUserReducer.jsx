import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    setGetProfile: (state, action) => {
      state.email = action.payload.data.body.email;
      state.firstName = action.payload.data.body.firstName;
      state.lastName = action.payload.data.body.lastName;
      state.userName = action.payload.data.body.userName;
    },
    setNewUserName: (state, action) => {
      state.userName = action.payload.editUserName;
    },
  },
});

export const { setGetProfile } = profileSlice.actions;
export const { setNewUserName } = profileSlice.actions;
export default profileSlice.reducer;
