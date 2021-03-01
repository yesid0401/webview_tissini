<template>
  <ion-app>
  </ion-app>
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
import getWebview from './composables/webview'
import { Plugins } from '@capacitor/core';

export default defineComponent({
  name: 'App',
  components: {
    IonApp
  },
  async setup() {
      const { Network,Toast,App } = Plugins;
      const isConected = await Network.getStatus();

      const {getWeb} = getWebview()
     
      if(isConected.connected) getWeb()
      else {
          Toast.show({
            text : 'por favor conectese a una red con internet',
            duration: 'long'
          })

          App.exitApp()
      }

  }


});


</script>