import router from './router';
import App from './app.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router,
    render: function(h) {
        return h(App);
    },
    data: function() {
        return {

        };
    },
    mounted: function () {

    },
    watchers: {
        bearer: function (newVal, oldVal) {

        }
    },
    created: function () {

    }
});