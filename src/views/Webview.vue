<template>
    <ion-page></ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getWebview from '../composables/webview'
import {IonPage} from '@ionic/vue'
export default defineComponent({
    name: 'Webview',
    components: {
        IonPage
    },
    setup() {
       const {getWeb} = getWebview()
       getWeb()

    }
}) 
</script>