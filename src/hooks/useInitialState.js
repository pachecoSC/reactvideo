import { useState, useEffect } from 'react'

const selectCategorieTitle = (category) => {
  let title = ''
  switch (category) {
    case 'mylist':
      title = 'Mi Lista'
      break
    case 'originals':
      title = 'Originales'
      break
    case 'trends':
      title = 'Tendencias'
      break

    default:
      break
  }
  return title
}

const useInitialState = (API_URL) => {
  const [video, setVideo] = useState([])
  //  ! useState necesita parametros
  //  ! string      'texto'
  //  ! int      0
  //  ! objeto      []
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const response = {}
        Object.keys(data).forEach((cat) => {
          response[selectCategorieTitle(cat)] = data[cat]
        })
        setVideo(response)
      })
  }, [])
  //  ! useEffect recibe dos parametros
  //  ! 1. - funcion a trabajar.
  //  ! 2. - cuando se va a ejecutar, si no enviamos parametro seria un bucle infinito,si tiene un array vacio
  //  ! [] esta función solo se ejecutará al montar o desmontar el componente.

  return video
}

export default useInitialState
