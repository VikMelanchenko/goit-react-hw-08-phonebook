const getIsLoggedIn = (state) => Boolean(state.auth.token);

const getUsername = (state) => state.auth.user.name;

export default {
  getIsLoggedIn,
  getUsername,
};
