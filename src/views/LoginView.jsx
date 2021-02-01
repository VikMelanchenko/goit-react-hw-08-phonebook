import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { authOperations } from '../redux/auth';

import styles from '../sass/styles.module.scss';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.form__container}>
        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              className={styles.input__item}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);

export default LoginView;
