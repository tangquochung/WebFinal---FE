import axios from "axios";

const api="https://motorshop-85ou.onrender.com"

const login =(username,password)=>{
    return axios.post(api+"/api/auth/signin",{
        username, password
    }).then((res)=>{
        if(res.data.accessToken)
        {
            localStorage.setItem("user", JSON.stringify(res.data))
        }
        return res.data
    })
}

const register=(firstname, lastname, email, username, password ) => {
    return axios.post(api+"/api/auth/signup", {
        firstname, lastname, email, username, password 
    })
}
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const logout=() => {
    localStorage.removeItem("user")
}

const authService = {login, getCurrentUser, logout, register}
export default authService