import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "hugo",
    email: "",
    // Autres propriétés de l'utilisateur
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    // Autres reducers
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
