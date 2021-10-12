import config from '../../config';

export const setFavorite = (payload) => ({
  type: config.ACTIONS_TYPE.SET,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: config.ACTIONS_TYPE.DELETE,
  payload,
})

export const loginRequest = (payload) => ({
  type: config.ACTIONS_TYPE.LOGIN,
  payload,
})

export const logoutRequest = (payload) => ({
  type: config.ACTIONS_TYPE.LOGOUT,
  payload,
})

export const registerRequest = (payload) => ({
  type: config.ACTIONS_TYPE.REGISTER,
  payload,
})

export const getVideoSource = (payload) => ({
  type: config.ACTIONS_TYPE.GET_VIDEO,
  payload,
})
// export default setFavorite
