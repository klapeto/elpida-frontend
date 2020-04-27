import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/docs',
        name: 'Documentation',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/documentation.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/test.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/search.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router