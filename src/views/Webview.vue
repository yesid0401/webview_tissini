<template>
    <ion-page>
        <ion-content>
                <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                              <ion-refresher-content
                                    :pulling-icon="chevronDownCircleOutline"
                                    pulling-text="Pull to refresh"
                                    refreshing-spinner="circles"
                                    refreshing-text="Actualizando...">
                                </ion-refresher-content>
                </ion-refresher>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">

import { defineComponent} from 'vue';
import getWebview from '../composables/webview'
import {IonPage,IonContent,IonRefresher,IonRefresherContent } from '@ionic/vue'
import { chevronDownCircleOutline } from 'ionicons/icons'

interface CustomEvent {
  target: {
    complete: Function;
  };
}

export default defineComponent({
    name: 'Webview',
    components: {
        IonPage,
        IonContent,
        IonRefresher,
        IonRefresherContent

    },
    setup() {
       const {getWeb} = getWebview()
       getWeb()

       const doRefresh = (event:CustomEvent) => {
            console.log('Begin async operation');

            setTimeout(() => {
                console.log('Async operation has ended');
                event.target.complete();
            }, 2000);
        }
        return {chevronDownCircleOutline ,doRefresh}
    }
}) 
</script>