const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;

const getIsRefreshin = (state) => state.auth.isRefresh;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshin,
};
export default authSelectors;
