import {request} from "./request";

// 得到首页中所有的数据
export function getHomeAllData(){
    return request({
        url: '/api/index'
    })
}