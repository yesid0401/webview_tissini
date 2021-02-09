import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';
import {Plugins} from '@capacitor/core'
import {ruta} from '../router'

const {App} = Plugins;

const getWebview: any = (()=> {

    const {create} = InAppBrowser
    const options: InAppBrowserOptions = {
        location:'no',
        fullscreen:'no'
    }

    const getWeb = ()=>{
     // create(`https://tissini.app/${ruta}`,'_self',options)
      console.log('mostrando ruta desde webview.ts => ',ruta);
    }

    return {getWeb}
})

export default getWebview