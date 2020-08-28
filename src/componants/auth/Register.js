import React, { Component } from 'react';

import { firebaseConnect } from 'react-redux-firebase';

//import './auth.css';

class Login extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { firebase } = this.props;
    const { userName, email, password } = this.state;
    const createNewUser = { email, password, userName };
    if (email === '' || password === '' || userName === '') {
      console.log('err');
    } else {
      firebase.createUser(createNewUser);
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    //  console.log(this.props);
    const { email, password, userName } = this.state;
    return (
      <div className="row mt-5">
        <div className="col-md-6 mx-auto">
          <h1>
            Account <span className="text-primary">Register</span>
          </h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input
                className="form-control"
                type="text"
                name="userName"
                autoComplete="username"
                value={userName}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="form-control"
                type="email"
                name="email"
                autoComplete="username"
                value={email}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default firebaseConnect()(Login);
