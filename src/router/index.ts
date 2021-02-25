import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import  Webview from '../views/Webview.vue' 


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/webview'
  },
  {
    path: '/webview',
    name: 'webview',
    component: Webview
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export  default router;
