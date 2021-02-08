import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import styles from './login.module.scss';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.form__container}>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <header className={styles.head__form}>
          <h2>Log In</h2>
          <p>login here using your username and password</p>
        </header>
        <label className={styles.label}>
          Mail
          <input
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            onChange={handleChange}
            className={styles.input__item}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            onChange={handleChange}
            className={styles.input__item}
          />
        </label>

        <button className={styles.main_button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
