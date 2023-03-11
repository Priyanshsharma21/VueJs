import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
    {
        path : '/',
        name : 'home',
        component : Home,
     },
     {
        path : '/about',
        name : 'about',
        component : ()=>import('../views/About.vue')
     },
]



const router = createRouter({
    history : createWebHistory(),
    routes: routes,

    linkActiveClass : 'vac-active-link',
    scrollBehavior(to, from, savePosition){
        return savePosition || {top : 0}
    }
})

export default router;