const { createApp } = require('vue');

// import FeatureList from './components/FeatureList.vue';
// import HelloWorld from './components/HelloWorld';

import App from './App.vue';

// createApp(App).mount('#app');

// // const app = new Vue({
// //   router
// // }).$mount('#app')

import createRouter from './router';

// const message = '';

createApp(App).use(createRouter()).mount("#app");


// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import App from './App.vue';

// const Home = { template: '<div>Home</div>' };
// const Foo = { template: '<div>Foo</div>' };
// const Login = { template: '<div>Login</div>' };

// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     { path: '/home', name: 'home', component: Home },
//     { path: '/foo', name: 'foo', component: Foo },
//     { path: '/login', name: 'login', component: Login },
//     { path: '*', redirect: '/login' }
//   ]
// });

// router.beforeEach((to, from, next) => {
//   console.log('from', from.name);
//   console.log('to', to.name);
//   if (to.name === 'login' || to.name === 'home') {
//     return next();
//   }
//   console.log('here');
//   next('/login');
// });

// Vue.use(VueRouter);

// new Vue({
//   router,
//   el: '#app'
// });
