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
          <header>
            <img
              src="https://cdn.merchantmaverick.com/wp-content/uploads/2018/05/yelp-logo-transparent-background-4.png">
            </img>
          </header>
          {this.renderErrors()}

          <div className="session-form-body">

            <div className="session-form-left">
              <h3>{formType} to Woof</h3>

              <div className="session-form-left-text">
                <p>{navLinkMessage}</p>
                <p className="session-form-left-button">{navLink}</p>
              </div>


              <p className="legal-copy">By logging in, you agree to Woof’s
                Terms of Service and Privacy Policy.</p>

              <div className="session-form-left-facebook">
                <p className="fa fa-facebook"></p>
                <p>{formType} with Facebook</p>
              </div>

              <div className="session-form-left-google">
                <img src="https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cae242fd3929/assets/img/structural/24x24_google_rainbow.png">
                </img>
                <p>{formType} with Google</p>
              </div>

              <div className="login-seperator">
                  <span className="or-line"></span>
                  <span className="or-text">OR</span>
                  <span className="or-line"></span>
              </div>

              <form onSubmit={this.handleSubmit}>
                {this.signUp()}
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />

                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />

                <input type="submit" value={formType} />

              </form>
            </div>

            <div className="session-form-right">
              <img
                src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png">
              </img>
            </div>


            </div>


          </div>
      );
    }
  }

  export default SessionForm;
