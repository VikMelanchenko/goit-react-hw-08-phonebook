import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import styles from '../sass/styles.module.scss';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.form__container}>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <header className={styles.head__form}>
          <h2>Sigh Up Form</h2>
          <p>Enter your personal data</p>
        </header>
        <label className={styles.label}>
          Username
          <input
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleChange}
            className={styles.input__item}
          />
        </label>

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

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
