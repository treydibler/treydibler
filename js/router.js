import Index from './pages/index.vue';
import Profile from './pages/profile.vue';
import VueRouter from 'vue-router';

export default new VueRouter({
    routes: [
        { path: '/', name: 'Index', component: Index },
        { path: '/profile', name: 'Profile', component: Profile },
    ]
});