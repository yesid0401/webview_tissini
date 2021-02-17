import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';
import {Plugins,PushNotificationActionPerformed,AppUrlOpen,PushNotification } from '@capacitor/core'

const {App,PushNotifications,Toast} = Plugins;
const options: InAppBrowserOptions = {
    location:'no',
    fullscreen:'no',
    clearcache:'yes',
    clearsessioncache:'yes',
}
let ruta: any = undefined;
const {create} = InAppBrowser


const getWebview: any = (()=> {
    
   
    const getWeb = async()=>{

        if(ruta === undefined){
           let browser = create('https://tissini.app/','_blank',options)

                browser.on('message').subscribe(msg=>{
                    alert('recibiendo mensaje'+msg)
                })  

             browser.on('loaderror').subscribe( (event: any)=>{
                if(event.message == 'net::ERR_UNKNOWN_URL_SCHEME'){
                    browser.hide();
                    const wpBrowser = create(event.url,'_system');
                    setTimeout(() => {
                        browser._loadAfterBeforeload('https://tissini.app/')
                       browser.show()
                    }, 2000);
                }
            })
        }      

        PushNotifications.addListener('pushNotificationActionPerformed',((notification: PushNotificationActionPerformed) =>{
            const {link} = notification.notification.data
            ruta=link
            const browser = create(link,'_self',options)

            browser.on('loadstart').subscribe(()=>{
                Toast.show({
                    text:'cargando...',
                    position:'center',
                    duration:'long'
                })
            })
        }))

        App.addListener('appUrlOpen',((data: AppUrlOpen)=>{
              ruta = data.url
              const browser = create(ruta,'_self',options)

               browser.on('loaderror').subscribe((event: any)=>{
                if(event.message == 'net::ERR_UNKNOWN_URL_SCHEME'){
                    browser.hide();
                    //@ts-ignore
                    browser = undefined;
                    const wpBrowser = create(event.url,'_system');

                    setTimeout(() => {
                        browser._loadAfterBeforeload('https://tissini.app/')
                        browser.show()
                    }, 2000);
                }
            })

            browser.on('message').subscribe(msg=>{
                alert('recibiendo mensaje'+msg)
            })
        }))

        PushNotifications.addListener('pushNotificationReceived',(notification: PushNotification)=>{      
            Toast.show({
                text: 'notification.data.title',
                position:'top',
            })
            console.log(notification.title)
        })
    }

    return {getWeb}
})

export default getWebview