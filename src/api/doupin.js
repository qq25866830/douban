
import http from 'utils/http.js'
 
//DouPin里面
export const getDouPinNow = ()=>http('get','/api/v2/market/modules?utm_campaign=mobile_web_douban_nav&utm_source=douban&utm_medium=mobile_web')



