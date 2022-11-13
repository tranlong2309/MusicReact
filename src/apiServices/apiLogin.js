import * as request from 'utils/request'
import { loginFailed, loginStart, loginSuccess,registerFailed,registerStart,registerSuccess,logOutSuccess,logOutStart,logOutFailed } from 'features/redux/authSlice';
import { toggleShowLoginModal } from 'configSlice';

export const LoginUser = async(user,dispatch,navigate)=>{
    dispatch(loginStart());
    try {
            const res= await request.Login(user)
            dispatch(loginSuccess(res));
            dispatch(toggleShowLoginModal(false));
            navigate("/personal");
     
    } catch (error) {
        dispatch(loginFailed());
    }
}

export const RegisterUser = async(registerUser,dispatch,navigate)=>{
    dispatch(registerStart);
    try {
            const res= await request.post("Users/registeruser",registerUser)
            dispatch(registerSuccess(res));
            dispatch(toggleShowLoginModal(false));
            navigate("/personal");

    } catch (error) {
        dispatch(registerFailed("That Bai"));
    }
}

export const refreshToken = async(Token)=>{
    try {
            const res= await request.post("Users/refresh-token",Token);
        return res
    } catch (error) {

    }
}

export const logOut= async(dispatch,navigate,axiosJWT)=>{
    dispatch(logOutStart())
    try{
        const res= await axiosJWT.post("https://localhost:44348/Users/logout",)
        dispatch(logOutSuccess())
        navigate("/")
        return res.data;
    }catch(error){
        dispatch(logOutFailed())
    }
}