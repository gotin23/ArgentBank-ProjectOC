import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    token: "",
  },
  reducers: {
    setSignIn: (state, action) => {
      state.token = action.payload.response.body.token;
    },
    setLogout: (state, action) => {
      state.token = action.payload.tnk;
    },
  },
});

export const { setSignIn } = signInSlice.actions;
export const { setLogout } = signInSlice.actions;
export default signInSlice.reducer;
