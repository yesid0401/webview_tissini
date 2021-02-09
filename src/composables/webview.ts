import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';
import {Plugins} from '@capacitor/core'
//import {ruta} from '../router'

const {App} = Plugins;

const getWebview: any = (()=> {
    let ruta:any = '';

    const getUrl:any = async ()=>{
        const url = await App.getLaunchUrl();
        ruta = url.url
      }

    const {create} = InAppBrowser
    const options: InAppBrowserOptions = {
        location:'no',
        fullscreen:'no'
    }

    const getWeb = async()=>{
        await getUrl()
        if(ruta === undefined){
            create('https://tissini.app/','_self',options)
        }else {
            create(ruta,'_self',options)
        }

    }

    return {getWeb}
})

export default getWebview