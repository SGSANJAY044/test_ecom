import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:1810' })
const authInterceptor = (req) => {
    const accessToken = JSON.parse(localStorage.getItem("user"))?.token;
    if (accessToken) {
        console.log(accessToken);
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log(JSON.parse(localStorage.getItem("user")));
    return req;
};

API.interceptors.request.use(authInterceptor);

export default API;