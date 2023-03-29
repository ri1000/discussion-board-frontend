import axios from "axios";



const axiosApiNoAuth = axios.create({
    baseURL:"http://localhost:8090/api/"
})

const apiRequestAuth = (method,url,request) =>{
    return axiosApiNoAuth({
        method,
        url,
        data: request  
    }).then(respones => {
        return Promise.resolve(respones.data)
    }).catch(error => {
       return Promise.reject(error)
    }) 
}
const postWithoutAccess = (url, requset) => apiRequestAuth("post",url,requset)

const API = {
    postWithoutAccess
}

export default API

function getAccessToken(){
    const tokens = JSON.parse(sessionStorage.logedUserRefresh)
    return tokens.access_token
}

const axoiosApi = axios.create({
    baseURL:"http://localhost:8090/api/"
})
