import axios from "axios";

axios.defaults.withCredentials = true;
const instance = axios.create({
    baseURL: "http://localhost:8000/api",//기본 도메인을 설정할 수 있습니다. 
    // baseURL: "http://www.fullio.kr:8000/api",//기본 도메인을 설정할 수 있습니다. 
    headers:{
        "Content-Type": "application/json"
    },
    responseType : "json",
})

export default instance;