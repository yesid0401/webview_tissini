
import {Plugins,PushNotificationActionPerformed,PushNotification,PushNotificationToken } from '@capacitor/core'
const {PushNotifications,Toast} = Plugins;

const notifications = (router:any,create:any,options:any)=>{
    PushNotifications.requestPermission().then( result => {
        if (result.granted) {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          // Show some error
        }  
    });
    
    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
        (token: PushNotificationToken) => {
            console.log(token.value);
        }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotification) => {
            alert('Push received: ' + JSON.stringify(notification));
        }
    );
  
    PushNotifications.addListener('pushNotificationActionPerformed',((notification: PushNotificationActionPerformed) =>{
        const {link} = notification.notification.data
        router=link
        if(router == undefined){
           return create('https://tissini.app/','_blank',options)
        }
        const browser = create(link,'_self',options)
        browser.on('loadstart').subscribe(()=>{
            Toast.show({
                text:'cargando...',
                position:'center',
                duration:'long'
            })
        })
    }))
}

export default notifications;