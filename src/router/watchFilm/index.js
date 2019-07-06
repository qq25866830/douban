//路由懒加载
export default {
    path:'/watchFilm',
    component:()=>import('views/watchFilm'),
    name:"watchFilm",

}
