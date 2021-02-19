import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';
import {Plugins,AppUrlOpen } from '@capacitor/core';
import notifications from './notifications'
import eventsBrowser from './eventsBrowser'

const {App} = Plugins;
const {create} = InAppBrowser
let router: any = undefined;

const options: InAppBrowserOptions = {
    location:'no',
    fullscreen:'no',
    clearcache:'yes',
    clearsessioncache:'yes',
    zoom:'yes'
}

const getWebview: any = (()=> {
    
    const getWeb = async()=>{
        if(router === undefined){
           const browser = create('https://tissini.app/','_blank',options)
           eventsBrowser(browser)
        }      

        App.addListener('appUrlOpen',((data: AppUrlOpen)=>{
            router = data.url
              const browser = create(router,'_self',options)
              eventsBrowser(browser)
        }));

        notifications(router,create,options)
    }

    return {getWeb}
})

export default getWebview