import config from '../../config';

export const setFavorite = (payload) => ({
  type: config.ACTIONS_TYPE.SET,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: config.ACTIONS_TYPE.DELETE,
  payload,
})

// export default setFavorite
