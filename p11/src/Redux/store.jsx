import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";
import SignInReducer from "./Reducers/SignInReducer";

const store = configureStore({
  reducer: {
    user: UserReducer,
    signIn: SignInReducer,
    // Autres reducers...
  },
  // Autres options de configuration (middleware, devtools, etc.)
});

export default store;
