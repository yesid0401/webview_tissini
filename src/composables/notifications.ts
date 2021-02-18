import {Plugins,PushNotificationActionPerformed,PushNotification,PushNotificationToken } from '@capacitor/core'
import eventsBrowser from './eventsBrowser'

const {PushNotifications} = Plugins;


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
           const browser =  create('https://tissini.app/','_blank',options)
           eventsBrowser(browser)
        }else {
            const browser = create(link,'_self',options)
            eventsBrowser(browser)
        }

    }))
}

export default notifications;