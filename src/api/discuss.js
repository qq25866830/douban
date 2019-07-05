
import http from 'utils/http.js'
 
//movie里面的
export const getDiscussNow = ()=>http('get','/rexxar/api/v2/celebrity/1350194')

export const getDiscussepisode = ()=>http('get','/rexxar/api/v2/movie/26931786/forum_topics?start=0&count=10&episode=0&ck=&for_mobile=1')
