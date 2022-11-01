import * as request from 'utils/request'
import { loginFailed, loginStart, loginSuccess,registerFailed,registerStart,registerSuccess } from 'features/redux/authSlice';
import { toggleShowLoginModal } from 'configSlice';

export const LoginUser = async(user,dispatch,navigate)=>{
    dispatch(loginStart());
    console.log(user)
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

export const refreshToken = async()=>{
    try {
            const res= await request.post("Users/refresh-token")
        return res
    } catch (error) {

    }
}