//路由懒加载
export default {
    path:'/people',
    component:()=>import('views/people'),
    name:"people",

}