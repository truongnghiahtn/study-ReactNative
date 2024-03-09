import axios from "axios";

const KEY_WEB='AIzaSyAkUrtcJOQSbRYAXzxT3X8PomGBVkld3hc';

export const createUser=async (email,password)=>{
    const response= await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY_WEB}`,{
        email,
        password,
        returnSecureToken:true
    })
    const token = response.data.idToken;
    return token;
}

export const loginUser=async (email,password)=>{
    const response= await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY_WEB}`,{
        email,
        password,
        returnSecureToken:true
    })
    const token = response.data.idToken;
    return token;
}