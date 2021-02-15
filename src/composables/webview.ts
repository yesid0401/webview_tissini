import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';
import {Plugins,PushNotificationActionPerformed,AppUrlOpen,PushNotification} from '@capacitor/core'

const {App,PushNotifications,Toast} = Plugins;
const getWebview: any = (()=> {
    const {create} = InAppBrowser

    const options: InAppBrowserOptions = {
        location:'no',
        fullscreen:'no'
    }

    let ruta: any = undefined;
    
    const getWeb = async()=>{

        if(ruta === undefined){
           const browser = create('https://tissini.app/','_self',options)

            browser.on('loadstart').subscribe((event: any)=>{
                Toast.show({
                    text:'cargando...',
                    position:'center'
                })
            })
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
            const browser = create('https://tissini.app/','_self',options)

            browser.on('loadstart').subscribe((event: any)=>{
                Toast.show({
                    text:'cargando...',
                    position:'center'
                })
            })
        }))

        App.addListener('appUrlOpen',((data: AppUrlOpen)=>{
               ruta = data.url
              const browser = create('https://tissini.app/','_self',options)

               browser.on('loadstart').subscribe((event: any)=>{
                   Toast.show({
                       text:'cargando...',
                       position:'center',
                   })
               })
        }))

        PushNotifications.addListener('pushNotificationReceived',(notification:PushNotification)=>{
           
            Toast.show({
                text: 'notification.data.title',
                position:'top',
            })
        })
    }

    return {getWeb}
})

export default getWebview