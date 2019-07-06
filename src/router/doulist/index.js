//路由懒加载
export default {
    path:'/doulist',
    component:()=>import('views/doulist'),
    name:"doulist",

}