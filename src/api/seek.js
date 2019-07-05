
import http from 'utils/http.js'
 
//seek里面的
export const getSeekNow = ()=>http('get','/rexxar/api/v2/celebrity/1350194')

export const getSeekepisode = ()=>http('get','/rexxar/api/v2/celebrity/1350194/works?sort=vote&count=10')



