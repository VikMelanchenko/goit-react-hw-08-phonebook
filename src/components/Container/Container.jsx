import React from 'react';
import styles from '../../sass/styles.module.scss';

const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;
