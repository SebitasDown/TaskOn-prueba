import axios from "axios";

// Configuracion de axios para que acceda a la api con los metodos HTTP
const api = axios.create({
    baseURL : 'https://taskdone-g9xl.onrender.com'
});


// Seguridad con token (recibe el token del bakend)
api.interceptors.request.use(config =>{
    const token = localStorage.getItem('accessToken');

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

export default api;