//路由懒加载
export default {
    path:'/review',
    component:()=>import('views/review'),
    name:"review",

}