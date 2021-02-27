import {Plugins,AppUrlOpen } from '@capacitor/core';
import eventsBrowser from './eventsBrowser'
const {App} = Plugins;

const appUrlOpen = ((create: any,router: Boolean,options: any)=>{

    App.addListener('appUrlOpen',((data: AppUrlOpen)=>{
        router = false
        const browser = create(data.url,'_blank',options)
        eventsBrowser(browser)

    }));
    
    return router
})

export default appUrlOpen;
