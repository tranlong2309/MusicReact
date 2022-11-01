import { configureStore, ConfigureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
export const storeLogin= configureStore({
    reducer:{
        auth:authReducer
    }
})
export default storeLogin;