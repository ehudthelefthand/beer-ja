import axios from "axios";
const HOST = "http://localhost:3000/";

const instance = axios.create({
    baseURL: HOST
});

export default instance;