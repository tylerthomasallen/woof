import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    const { errors } = this.props;
    return (
      <ul className="session-form-errors">
        {errors.map((error, idx) => (
          <li key={`${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signUp() {
    const { formType } = this.props;
    if (formType === 'Sign Up') {
      return (
      <React.Fragment>
        <input type="text"
          value={this.state.first_name}
          onChange={this.update('first_name')}
        />

        <input type="text"
          value={this.state.last_name}
          onChange={this.update('last_name')}
        />

        <input type="text"
          value={this.state.zipcode}
          onChange={this.update('zipcode')}

        />
        </React.Fragment>
      );
    }
  }

  render() {
    const { formType, navLink, navLinkMessage } = this.props;
      return (
        <div className="session-form">
          {this.renderErrors()}
          <h3>{formType} to Woof</h3>
          <h4>{navLinkMessage} {navLink}</h4>

          <form onSubmit={this.handleSubmit}>
            {this.signUp()}
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />

            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />

            <input type="submit" value={formType} />

            </form>
          </div>
      );
    }
  }

  export default SessionForm;
