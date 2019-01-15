import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Sort from './components/Sort/index.vue';
import Detail from './components/Consult/Detail/index.vue';
import Purchase from './components/Consult/Purchase/index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/', 
        component: Home, 
        redirect: '/home'
    },
    {
        path: '/home', 
        component: Home
    },
    {
        path: '/detail', 
        component: Detail
    },
    {
        path: '/purchase', 
        component: Purchase
    },
    {
        path: '/sort', 
        component: Sort
    }
];

export default new VueRouter({
    routes
})