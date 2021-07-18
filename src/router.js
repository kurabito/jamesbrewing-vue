import {
  createRouter,
  createWebHistory
} from 'vue-router/dist/vue-router.esm-bundler';
import FeatureList from './components/FeatureList.vue';
import ABVfromOGandFG from './components/ABVfromOGandFG.vue';
import ABVfromSGandBrix from './components/ABVfromSGandBrix.vue';
import StrikeWater from './components/StrikeWater.vue';

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Features',
        component: FeatureList
      },
      {
        path: '/abvogfg',
        name: 'ABV from OG and SG',
        component: ABVfromOGandFG
      },
      {
        path: '/abvsgbrix',
        name: 'ABV from SG and Brix',
        component: ABVfromSGandBrix
      },
      {
        path: '/strikewater',
        name: '/Strike Water Temperature',
        component: StrikeWater
      }
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import('./views/About.vue')
      // },
      // {
      //   path: '/contact',
      //   name: 'Contact',
      //   component: () => import('./views/Contact.vue')
      // }
    ]
  });
