import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    token: "",
  },
  reducers: {
    setSignIn: (state, action) => {
      console.log(action);
      state.token = action.payload.tkn;
    },
    // Autres reducers
  },
});

export const { setSignIn } = signInSlice.actions;
export default signInSlice.reducer;
