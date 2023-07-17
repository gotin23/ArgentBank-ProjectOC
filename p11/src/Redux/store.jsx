import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";

const store = configureStore({
  reducer: {
    user: UserReducer,
    // Autres reducers...
  },
  // Autres options de configuration (middleware, devtools, etc.)
});

export default store;
