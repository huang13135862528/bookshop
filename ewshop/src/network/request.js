// 通用的请求文件
import axios from 'axios';

export function request(config){
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',   /* 基础的请求域名 */
        timeout: 5000   /* 设置请求超时 */
    })

    // 请求拦截
    instance.interceptors.request.use(config=>{
        // 如果有需要授权才可以访问的接口，统一去login授权

        // 如果有一个接口需要认证才可以访问，就在这统一设置

        return config;  // 直接放行
    },err=>{

    })

    // 响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res)
        return res.data ? res.data : res; // 直接放行
    },err=>{
        // 如果有错误，这里会去处理，显示错误信息。
    })

    return instance(config);
}