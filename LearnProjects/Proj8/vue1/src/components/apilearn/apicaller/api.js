import axios from 'axios';


const api = axios.create({
    baseURL : 'https://wallhaven.cc'
})



export default api