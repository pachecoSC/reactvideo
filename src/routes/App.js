import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
// otra forma de trabajar es con layaout se crea un componente Layout su contenido debe ser el header y footer

const App = () => (
  <BrowserRouter>
    {/* <Layout> */}
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route component={NotFound} />
    </Switch>
    {/* </Layout> */}
  </BrowserRouter>
)

export default App

// *  de esta manera el layout trabaja por encima de los componentes que se llaman en route.
// *  en este ejemplo no lo he considerado por que e creado vistas con sus componentes para cada pagina
