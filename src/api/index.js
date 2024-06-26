import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:1810' })
const authInterceptor = (req) => {
    const accessToken = JSON.parse(localStorage.getItem("user"))?.token;
    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
};

API.interceptors.request.use(authInterceptor);

export default API;