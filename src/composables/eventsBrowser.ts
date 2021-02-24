import {Plugins } from '@capacitor/core';
import 'pusherBeams-plugin'
const {Toast,App,PusherBeamsPlugin} = Plugins;

const eventsBrowser =  (browser: any)=>{
    browser.on('exit').subscribe(()=>{
        Toast.show({
            text: '!!🙋‍♀️ Vuelve Pronto 🙋‍♀️!!',
            position: 'center',
            duration:'long'
        })

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