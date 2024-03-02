import axios from "axios";

const axiosIntance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, 
});

export default axiosIntance