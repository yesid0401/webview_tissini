import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';
import {Plugins,AppUrlOpen } from '@capacitor/core';
import notifications from './notifications'
import eventsBrowser from './eventsBrowser'


const {App} = Plugins;
const {create} = InAppBrowser
let router: any = 'https://tissini.app';

const options: InAppBrowserOptions = {
    location:'no',
    fullscreen:'no',
    clearcache:'yes',
    clearsessioncache:'yes',
    zoom:'yes'
}

const getWebview: any = (()=> {
    
    const getWeb = ()=>{
        notifications(create,router,options)

        App.addListener('appUrlOpen',((data: AppUrlOpen)=>{
            router = data.url
           const browser = create(router,'_self',options)
           eventsBrowser(browser)
        }));

      //  if(router == undefined){
           const browser = create(router,'_self',options)
           eventsBrowser(browser)
      //  }      
        
    }

    return {getWeb}
})

export default getWebview