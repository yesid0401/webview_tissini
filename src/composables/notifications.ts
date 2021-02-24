import {Plugins ,PushNotificationActionPerformed,PushNotification,PushNotificationToken, LocalNotificationActionPerformed } from '@capacitor/core'
import eventsBrowser from './eventsBrowser'
import { FCM } from '@capacitor-community/fcm';
const fcm = new FCM();
const {PushNotifications,LocalNotifications} = Plugins;


const notifications = (create: any,options: any)=>{

    PushNotifications.requestPermission().then( result => {
        if (result.granted) {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register().then(()=>{
              fcm.subscribeTo({
                  topic:'UserLogout'
              }).then((data)=>{
                  //aqui va algo
              })
          })
        } else {
          // Show some error
        }  
    });
    
    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
        (token: PushNotificationToken) => {
           // aqui puedo ver el token
        }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotification) => {
            console.log(notification);
            LocalNotifications.schedule({
                notifications:[
                    {
                            title: notification.title || '',
                            body: notification.body || '',
                            id: parseInt(notification.id),   
                            extra:{
                                link:notification.data.link
                            }
                    }
                ]
            })
        }
    );
    PushNotifications.addListener('pushNotificationActionPerformed',((notification: PushNotificationActionPerformed) =>{
        const {link} = notification.notification.data
       
        if(link == undefined){
           const browser =  create('https://tissini.app/','_blank',options)
           eventsBrowser(browser)
        }else {
            const browser = create(link,'_blank',options)
            eventsBrowser(browser)
        }

    }))


    LocalNotifications.addListener('localNotificationActionPerformed',(notification: LocalNotificationActionPerformed) =>{
        const {link} = notification.notification.extra;
        
        if(link == undefined){
           const browser =  create('https://tissini.app/','_blank',options)
           eventsBrowser(browser)
        }else {
            const browser = create(link,'_blank',options)
            eventsBrowser(browser)
        }

    })
}

export default notifications;