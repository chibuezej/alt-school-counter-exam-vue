import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import About from '../views/AboutView.vue'
import Counter from '../views/Counter.vue'
import NotFound from '../views/NotFound.vue'

const routes =[
    {path: "/", component: HomeView},
    {path: "/about", component: About},
    {path: "/counter", component: Counter},
    {path: "/:pathMatch(.*)*", component: NotFound}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router; 