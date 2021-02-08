import {InAppBrowserOptions,InAppBrowser} from '@ionic-native/in-app-browser';

const getWebview: any = (()=> {
    const {create} = InAppBrowser
    const options: InAppBrowserOptions = {
        location:'no'
    }
    const getWeb = ()=>{
        create('https://tissini.app/','_self',options)
    }

    return {getWeb}
})

export default getWebview