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

                    browser.executeScript({
                        code: "JSON.parse(localStorage.getItem('customer'));"
                    }).then(async (data: any)=>{
                        const {id}        = data[0];
                        const {stage}     = data[0];
                        const {escalafon} = data[0].elite

                        await PusherBeamsPlugin.addDeviceInterest({interest: id.toString()})
                        await PusherBeamsPlugin.addDeviceInterest({interest: stage})
                        await PusherBeamsPlugin.getDeviceInterests()

                        if(escalafon != null) 
                            await PusherBeamsPlugin.addDeviceInterest({interest: escalafon.toString()})
                    })

            }else{
                    await PusherBeamsPlugin.clearDeviceInterests()
                    await PusherBeamsPlugin.addDeviceInterest({interest: 'noLogin'})
                    await PusherBeamsPlugin.addDeviceInterest({interest: 'general'})
                    await PusherBeamsPlugin.getDeviceInterests()
            }
        })


    })
}

export default eventsBrowser