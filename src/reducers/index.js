const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      }
    default:
      return state
  }
}

export default reducer

//traemos el estado.
// elemento a actualizar.. se envia un arreglo con 2 valores.
// "valor 1" elementos que contega, "valor 2" el objeto que se va a guardar.
