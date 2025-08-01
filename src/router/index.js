import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Home from '../views/Home.vue';
import MealList from '../views/MealList.vue';

 const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: MealList,
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes  
});

export default router;
export { routes };