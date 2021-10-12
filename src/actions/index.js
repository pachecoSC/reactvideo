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
// export default setFavorite
