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

# redux devtools
para poder trabajar con esta herramuienta debemos instalar la extencion en el navegador.

>Redux DevTools

lo siguiente es llamar a compose en el index.js

y agregar window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ en el createstore.

# Notas
1- para obtener acceso a las propiedades del objeto histórico y la coincidencia de la ruta más cercana a través del componente de orden superior withRouter
ejemplo: login tiene un componente hijo llamado loginForm para que loginForm tenga acceso al props.history
el componente loginForm al exportarse debe estar encapsulado en withRouter

import { withRouter } from 'react-router-dom'

//contenido

export default withRouter((LoginForm)

2- un objeto no nos devuelve nada con .length para saber debemos convertirlo a array

> Object,keys(name_objeto).length

 y de esta manera ya trae datos en caso tenga
