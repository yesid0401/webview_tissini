import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';
import notifications from './notifications'
import eventsBrowser from './eventsBrowser'
import useEventUrl from './useEventUrl'


const {create} = InAppBrowser
let router: boolean = true;

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
     useEventUrl(create,router,options)

       if(router){
           console.log('imprimiendo dentro de  router',router);
           const browser = create('https://tissini.app/','_blank',options)
           eventsBrowser(browser)
       }    
        
    }

    return {getWeb}
})

export default getWebview