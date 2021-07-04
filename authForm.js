import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'ousMane',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

// create a method called authorize() to check whether a submitted password is equal to the actual password "ousMane"
  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

// make the login form and store the contact info in a variable. The contact info should only be shown if the user enters the correct password
  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password"/>
        <input type="submit"/>
      </form>
    );

    const contactInfo = (
      <ul>
          <li>
            Ousmane Ndure
          </li>
          <li>
            ous.ndure66@gmail.com
          </li>
          <li>
            (+372) 5373.6685
          </li>
        </ul>
    );

    // the header display "Contact"" only if this.state.authorized is true. If this.state.authorized is false, then the header displays "Enter the Password"
    return (
      <div id="authorization">
        <h1>
          {this.state.authorized ? 'Contact' : 'Enter the Password'}
        </h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);