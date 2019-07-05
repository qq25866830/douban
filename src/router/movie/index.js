
//路由懒加载
export default {
    path:'/movie',
    component:()=>import('views/movie'),
    name:"movie",

}
