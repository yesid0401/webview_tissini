import {Plugins } from '@capacitor/core';
const {Toast} = Plugins;

const eventsBrowser = (browser:any)=>{

    browser.on('loadstart').subscribe(()=>{
        Toast.show({
            text:'🛒cargando 🛒',
            position:'center',
        })
    })

    browser.on('exit').subscribe(()=>{
        Toast.show({
            text: '!!🙋‍♀️ Vuelve Pronto 🙋‍♀️!!',
            position: 'center',
            duration:'long'
        })
        //@ts-ignore
        navigator.app.exitApp(); 
    })
}

export default eventsBrowser