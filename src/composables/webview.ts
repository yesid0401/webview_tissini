import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';
import {Plugins,AppUrlOpen } from '@capacitor/core';
import notifications from './notifications'

const {App,Toast} = Plugins;
const options: InAppBrowserOptions = {
    location:'no',
    fullscreen:'no',
    clearcache:'yes',
    clearsessioncache:'yes',
    zoom:'yes'
}

const loading = (browser:any)=>{
    browser.on('loadstart').subscribe(()=>{
        Toast.show({
            text:'cargando...',
            position:'center',
            duration:'long'
        })
    })
}

let router: any = undefined;
const {create} = InAppBrowser

const getWebview: any = (()=> {
    
    const getWeb = async()=>{

        if(router === undefined){
           const browser = create('https://tissini.app/','_blank',options)
           loading(browser)
        }      

        App.addListener('appUrlOpen',((data: AppUrlOpen)=>{
            router = data.url
              const browser = create(router,'_self',options)
              loading(browser)
        }));

        notifications(router,create,options)

    }

    return {getWeb}
})

export default getWebview