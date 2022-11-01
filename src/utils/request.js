import axios from "axios";

const request=axios.create({
    baseURL:'https://localhost:44348/'
})
export const get= async (path,option={})=>{
    const response= await request.get(path,option);
    return response.data;
}
export const post= async (path,option,config)=>{
    const response= await request.post(path,option,config);
    return response.data;
}
export const Login= async (option={})=>{
    const response= await request.post('Users/authenticate',option);
    return response.data;
}
export default request;