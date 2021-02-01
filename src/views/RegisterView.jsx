import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { authOperations } from '../redux/auth';

import styles from '../sass/styles.module.scss';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.form__container}>
        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
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
              onChange={this.handleChange}
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

          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);

export default RegisterView;
