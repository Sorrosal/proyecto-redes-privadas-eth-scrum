## proyectos

### frontend (react)

Ejecutar aplicación frontend

Situarse en la terminal en la carpeta frontend y ejecutar yarn dev

### backend (nodejs)

Ejecutar aplicación backend

Situarse en la terminal en la carpeta backend y ejecutar node app.js

### crear red eth

En el formulario de crear red rellenar con la cuenta de metamask, y una vez dado a crear, situarse en la carpeta backend en la ruta eth dentro de la carpeta eth1 y

conectarse desde metamask

### conectarse a la red desde metamask

### borrar proceso en power shell

```powershell
param ($network)
Get-Process -Name geth | Select-Object -property id | Stop-Process -Force; Remove-Item .\eth$network -Recurse
```

https://yenhuang.gitbooks.io/blockchain/content/interact-with-private-chain-on-android/build-the-private-chain.html
