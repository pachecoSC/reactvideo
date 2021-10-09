import config from '../../config'

const reducer = (state, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case config.ACTIONS_TYPE.SET:
      //el if solo valida que no exista.. si cumple solo retorna el state
      if (state.mylist.find((x) => x.id === action.payload.id)) {
        return {
          ...state,
        }
      }
      // de lo contrario no entro al return entonces continua con el resto de la funcionalidad
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      }

    case config.ACTIONS_TYPE.DELETE:
      return {
        ...state,
        mylist: state.mylist.filter((x) => x.id !== action.payload),
      }

    default:
      return state
  }
}

export default reducer

//traemos el estado.
// elemento a actualizar.. se envia un arreglo con 2 valores.
// "valor 1" elementos que contega, "valor 2" el objeto que se va a guardar.
