import axios from 'axios';
// import { promises } from 'dns';

const http = axios.create({
    timeout:5000,
    withCredentials:true,
})

http.interceptors.request.use( (config) =>{
    if(config=='get'){
        config.params
    }else if(config == 'post'){
        config.headers['content-type'] = "application/x-www-form-urlencoded";
    }
    return config;
},(err)=>{
    return Promise.reject(err);
})

http.interceptors.response.use((res)=>{
        if (res.status == 200) {
            return res.data;
        }
},(err)=>{
    return Promise.reject(err);
})

export default (method,url,data={})=>{
    if (method == 'get') {
        return http.get(url,{
            params:data
        })
    }else if(method == 'post'){
        return http.post(url,data);
    }
}   