
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueRouter from 'vue-router'

window.Vue = require('vue');
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const example = require('./components/ExampleComponent.vue');
const about = require('./components/AboutComponent.vue');

const routes = [

    {
        path: '/example',
        component: example
    },
    {
        path : '/about',
        component : about
    }

]


// Vue.component('example-component', require('./components/ExampleComponent.vue'));
const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router
});
