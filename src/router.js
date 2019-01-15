import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Sort from './components/Sort/index.vue';
import Detail from './components/Consult/Detail/index.vue';

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
        path: '/sort', 
        component: Sort
    }
];

export default new VueRouter({
    routes
})