import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../sass/styles.module.scss';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
