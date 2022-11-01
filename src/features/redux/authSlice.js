import {createSlice} from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        login:{
            currentUser:null,
            isFetching:false,
            error:false
        },
        register:{
            message:null,
            isFetching:false,
            error:false
        }
    },
    reducers:{
        loginStart:(state)=>{
            state.login.isFetching=true ;
        },
        loginSuccess:(state,action)=>{
            state.login.isFetching=false;
            state.login.currentUser=action.payload;
            state.login.error=false;
        },
        loginFailed:(state)=>{
            state.login.isFetching=false;
            state.login.error=true;
        },
        registerStart:(state)=>{
            state.register.isFetching=true ;
        },
        registerSuccess:(state,action)=>{
             state.register.isFetching=false;
             state.register.message=action.payload;
             state.register.error=false;
        },
        registerFailed:(state,action)=>{
            state.register.isFetching=false;
            state.register.message=action;
            state.register.error=true;
        }
    }
});
export const{
    loginStart,
    loginSuccess,
    loginFailed,
    registerFailed,registerStart,registerSuccess
}=authSlice.actions;

export default authSlice.reducer;