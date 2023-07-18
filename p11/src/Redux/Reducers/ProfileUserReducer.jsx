import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: "string",
    firstName: "string",
    lastName: "string",
    userName: "string",
  },
  reducers: {
    setGetProfile: (state, action) => {
      state.email = action.payload.data.body.email;
      state.firstName = action.payload.data.body.firstName;
      state.lastName = action.payload.data.body.lastName;
      state.userName = action.payload.data.body.userName;
    },
    // Autres reducers
  },
});

export const { setGetProfile } = profileSlice.actions;
export default profileSlice.reducer;
