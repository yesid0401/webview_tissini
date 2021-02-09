import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import  Webview from '../views/Webview.vue' 
import {Plugins} from '@capacitor/core'

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

const {App} = Plugins;

let ruta: any = ''

App.addListener('appUrlOpen', data => {
  const slug:any = data.url.split('.app');
  if(slug){
    ruta  = slug[1]
    console.log('mostrando ruta desde router/index.ts => ',ruta);
  }
});

export  {router,ruta}
