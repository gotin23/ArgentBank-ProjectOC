import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    token: "",
  },
  reducers: {
    setSignIn: (state, action) => {
      console.log(action.payload.response, "reducer");
      state.token = action.payload.response;
    },
    // Autres reducers
  },
});

export const { setSignIn } = signInSlice.actions;
export default signInSlice.reducer;
