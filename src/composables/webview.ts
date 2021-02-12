import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';
import {Plugins,PushNotificationActionPerformed,} from '@capacitor/core'

const {App,PushNotifications} = Plugins;
const getWebview: any = (()=> {
    const {create} = InAppBrowser

    const options: InAppBrowserOptions = {
        location:'no',
        fullscreen:'no'
    }
    let ruta = '';
    
    const getUrl: any = async ()=>{
        const url = await App.getLaunchUrl();
        ruta = url.url
      }
    const getWeb = async()=>{
        await getUrl()

        let browser: any ;
        if(ruta === undefined){
            browser = create('https://tissini.app/','_self',options)
             
        }else {
           browser = create(ruta,'_self',options)

        }

        // browser.on('loaderror').subscribe((event:any) => {
        //     if(event.message == 'net::ERR_UNKNOWN_URL_SCHEME'){
        //      //   browser.close();
        //      //   create(event.url, '_system');

        //      window.open(event.url)
               
        //     }
        // })

        PushNotifications.addListener('pushNotificationActionPerformed',((notification: PushNotificationActionPerformed) =>{
            const {link} = notification.notification.data
            ruta = link
            create(ruta,'_self',options)
        }))
    }

    return {getWeb}
})

export default getWebview