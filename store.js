import { configureStore} from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
Į
export const store = configureStore({
reducer: {
nav: navReducer,
},
});