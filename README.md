passos

1 git clone https://github.com/yesid0401/webview_tissini.git </br>
2 git clone https://github.com/yesid0401/pusheBeams-plugin.git </br>
los dos en mismo directorio </br><br>

3 npm i y  npm run build en la carpeta del plugin <b>pusheBeams-plugin</b></br>
3 npm i en la carpeta del proyecto <b>webview_tissini</b></br>
4 ionic capacitor sync </br>
5 ionic capacitor copy android </br>
6 abrir el archivo InAppBrowser.java, buscar la linea 1267 y dentro del else if agregar url.startsWith("whatsapp:") || url.startsWith("geo:") </br>
7 correr la aplicacion en android studio
