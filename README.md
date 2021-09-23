# reactvideo

ejemplo de react configuracion basica


para poder trabajar con las imagenes en babel debemos agregar el loader y configurar

npm install file-loader --save-dev
y debemos agregar una regla para tratar archivos enel webpack-config

# api fake
tenemos un archivo json que hara la funcionalidad de una api
/initialState.json

para instalar la dependencia de forma global usamos el siguiente comando

>npm install -g json-server

y para ejecutarlo debemos correr el siguiente comando

>json-server --watch initialState.json

otra forma de ejecutarlo sin la necesidad de instalar el json-server es usando el siguiente comando.

> npx json-server initialState.json

otra forma de deployar es usar en la consola
>npm run server
