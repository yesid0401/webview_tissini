passos

1 git clone https://github.com/yesid0401/webview_tissini.git
2 git clone https://github.com/yesid0401/pusheBeams-plugin.git

los dos en mismo directorio

3 npm i
4 ionic capacitor sync
5 ionic capacitor copy android
6 abrir el archivo InAppBrowser.java, buscar la linea 1267 y dentro del else if agregar url.startsWith("whatsapp:") || url.startsWith("geo:")
7 correr la aplicacion en android studio
