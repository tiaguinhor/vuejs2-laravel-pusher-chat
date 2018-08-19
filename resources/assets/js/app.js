/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

import VueRouter from 'vue-router';

require('./bootstrap');

Vue.use(require('vue-pusher'), {
  api_key: '3bb14eaa0c0125f59977'
});
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

// Vue.component('example', require('./components/Example.vue'));

const routes = require('./routes.js');
const router = new VueRouter(routes);

new Vue({
  // el: '#app',
  router
}).$mount('#app');
