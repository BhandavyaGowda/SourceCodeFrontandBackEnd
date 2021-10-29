import React, {Component} from 'react';

export default class Home extends Component {
  componentWillUnmount() {
    console.log('Unmounted');
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to Employee Managament Application</h1>
      </div>
    );
  }
}
