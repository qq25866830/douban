
import http from 'utils/http.js'
 //https://m.douban.com/rexxar/api/v2/movie/26931786/interests?count=4&order_by=hot&start=0&ck=&for_mobile=1  短评
 //https://m.douban.com/rexxar/api/v2/movie/26931786/credits   影人
 //https://m.douban.com/rexxar/api/v2/movie/26931786/forum_topics?start=0&count=5&ck=&for_mobile=1   讨论
//seek里面的
export const getAppraise = ()=>http('get','/rexxar/api/v2/movie/26931786/interests?count=4&order_by=hot&start=0&ck=&for_mobile=1') //短评

export const getStar = ()=>http('get','/rexxar/api/v2/movie/26931786/credits') //影人



