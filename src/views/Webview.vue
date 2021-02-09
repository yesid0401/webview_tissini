<template>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getWebview from '../composables/webview'

export default defineComponent({
    name:'Webview',
    setup() {
       const {getWeb} = getWebview()
       getWeb()

    }
}) 
</script>