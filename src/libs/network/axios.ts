import axios from "axios";

export const BASE_API_URL = process.env.BASE_API_URL + "/api/"

const axiosInstance = axios.create({
    baseURL : BASE_API_URL,
    headers : {
        "Content-Type": "Application/json",
        "timeout" : 1000
    }
})

require("axios-debug-log")

export default axiosInstance;