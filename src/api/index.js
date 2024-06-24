import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:1810' })

export default API;