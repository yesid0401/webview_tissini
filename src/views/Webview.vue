<template>
   <ion-page>
        <ion-content :fullscreen="true">
        </ion-content>
   </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import getWebview from '../composables/webview'

export default defineComponent({
    name:'Webview',
    components:{
        IonContent,IonPage
    },

    setup() {
       const {getWeb} = getWebview()
       getWeb()

    }

}) 
</script>