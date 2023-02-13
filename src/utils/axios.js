import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const authorizationKey = import.meta.env.VITE_REACT_APP_AUTH;
        const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
        if(token && config.headers){
            config.headers[authorizationKey] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response)
        return response
    },
    (error) =>{
        // adding other controller handling error in here
        // redirect user to login screen if there is no token exists
        return Promise.reject(error);
    }
)

export default axiosInstance;