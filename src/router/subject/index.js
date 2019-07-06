//路由懒加载
export default {
    path:'/subject',
    component:()=>import('views/subject'),
    name:"subject",

}
