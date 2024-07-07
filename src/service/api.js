import axios from "axios";
// import { getItem } from "../helpers/PersistanceStorage";

const instance = axios.create({
    // Set your base URL if needed
    baseURL: 'https://no23.lavina.tech',
    headers: {
        'Content-Type': 'application/json',
    },
});
//  instance.interceptors.request.use(config => {
//      const token = getItem("key");
//     const authorization = token ? `key ${token}` : "";
//      config.headers.Authorization = authorization;
//     return config;
// })
export default instance;