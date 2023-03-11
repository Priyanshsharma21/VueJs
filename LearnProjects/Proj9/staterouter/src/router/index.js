import Home from '../views/Home.vue'
import {createRouter,createWebHistory} from 'vue-router'
import sourceData from '../constant/data.json'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    // {
    //     path: '/brazil',
    //     name: 'brazil',
    //     component: ()=>import('../views/Brazil.vue')
    // },
    // {
    //     path: '/hawaii',
    //     name: 'hawaii',
    //     component: ()=>import('../views/Hawaii.vue')
    // },
    // {
    //     path: '/jamaica',
    //     name: 'jamaica',
    //     component: ()=>import('../views/Jamaica.vue')
    // },
    // {
    //     path: '/panama',
    //     name: 'panama',
    //     component: ()=>import('../views/Panama.vue')
    // },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: ()=>import('../views/DestinationShow.vue'),
        props : route=>({...route.params, id : parseInt(route.params.id)}),

        beforeEnter: (to, from) => {
            const exists = sourceData.destinations.find(destination=>destination.id ===parseInt(to.params.id))

            if(!exists) return {
                name : 'Not Found',
                params : {pathMatch : to.path.split('/').slice(1)},
                query : to.query,
                hash : to.hash,
            }

        },
        children : [
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: ()=>import('../views/ExperienceShow.vue'),
                props : route=>({...route.params, id : parseInt(route.params.id)})
            },
        ]
    },


    // 404 not found route    

    {
        path : '/:pathMatch(.*)*',
        name : 'Not Found',
        component : ()=>import('../views/NotFound.vue')
    }

    
]



const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass : 'vac-active-link',
    scrollBehavior(to, from, savePosition){
        return savePosition || {top : 0}
    }
})


export default router