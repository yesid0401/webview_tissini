<template>
  <ion-app>
  </ion-app>
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
import getWebview from './composables/webview'

export default defineComponent({
  name: 'App',
  components: {
    IonApp
  },
  setup(props) {
      const {getWeb} = getWebview()
      getWeb()
  }


});


</script>