import React from 'react';
import styles from './container.module.scss';

const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;
