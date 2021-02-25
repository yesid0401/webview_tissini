import {Plugins } from '@capacitor/core';
import 'pusherBeams-plugin'
const {Toast,App,PusherBeamsPlugin,SplashScreen} = Plugins;

const eventsBrowser =  (browser: any)=>{

    browser.on('loadstart').subscribe(()=>{
        SplashScreen.show({
            showDuration: 3000,
            autoHide: true
          });
    })

    browser.on('exit').subscribe(()=>{
        Toast.show({
            text: '!!🙋‍♀️ Vuelve Pronto 🙋‍♀️!!',
            position: 'center',
            duration:'long'
        })
        
        browser.close()
        browser = undefined
        App.exitApp()
        
    })

    browser.on('loadstop').subscribe(()=>{
        browser.executeScript({
            code: "localStorage.getItem('isLogin')"
        }).then(async (data: any)=>{
            const isLogin = data[0];
            if(isLogin){
                    await PusherBeamsPlugin.addDeviceInterest({interest: 'login'})
                    await PusherBeamsPlugin.removeDeviceInterest({interest: 'noLogin'})
            }else{
                    await PusherBeamsPlugin.addDeviceInterest({interest: 'noLogin'})
                    await PusherBeamsPlugin.removeDeviceInterest({interest: 'login'})
            }
        })
    })
}

export default eventsBrowser