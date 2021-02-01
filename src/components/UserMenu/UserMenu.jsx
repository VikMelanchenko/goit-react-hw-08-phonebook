import React from 'react';
// import { connect } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../images/default-avatr.png';
import styles from '../../sass/styles.module.scss';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
// const mapStateToProps = (state) => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

export default UserMenu;
