<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
//import {Plugins} from '@capacitor/core'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  setup(props) {
    // const {StatusBar} = Plugins
    // const showStatusBar = ()=>{
    //   StatusBar.show()  
    // }
    // showStatusBar()
  }
});
</script>