<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="https://vuejs.org/images/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1><router-link to="/">James Brewing</router-link></h1>
    <!-- <FeatureList/> -->
    <!-- <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/contact">Contact</router-link>
      <router-link to="/abvogsg">ABV from OG and FG</router-link>
    </nav> -->
    <main>
      <router-view />
      <!-- <ABVfromOGandFG/> -->
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import FeatureList from './components/FeatureList.vue';
import ABVfromOGandFG from './components/ABVfromOGandFG.vue';
import ABVfromSGandBrix from './components/ABVfromSGandBrix.vue';

// const message = '';

// import Vue from 'vue';
// import VueRouter from 'vue-router';


// // const Foo = { template: '<div>foo</div>' }
// // const Bar = { template: '<div>bar</div>' }

// // 2. Define some routes
// // Each route should map to a component. The "component" can
// // either be an actual component constructor created via
// // `Vue.extend()`, or just a component options object.
// // We'll talk about nested routes later.

// // const routes = [
// //   { path: '/', component: FeatureList },
// //   { path: '/abvogsg', component: HelloWorld },
// //   // { path: '/abvsgbrix', component: FeatureList },
// //   // { path: '/strikewater', component: FeatureList },
// //   // { path: '/abvogsg', component: HelloWorld }
// // ]

// // 3. Create the router instance and pass the `routes` option
// // You can pass in additional options here, but let's
// // keep it simple for now.
// // const router = new VueRouter({
// //   routes // short for `routes: routes`
// // })

// // 4. Create and mount the root instance.
// // Make sure to inject the router with the router option to make the
// // whole app router-aware.



// // const app = new Vue({
// //   router
// // }).$mount('#app')

// // Now the app has started!



// // Vue.use(VueRouter);



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


export default {
  name: 'App',
  components: {
    // HelloWorld,
    FeatureList,
    ABVfromOGandFG,
  },
}

// export default {}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
div {
    margin: 10px;
}
label {
    display: block;
}
input {
    width: 10ch;
}
a {
    color: black;
}
h1 > a {
    text-decoration: none;
}
</style>
