import React, {Component} from 'react';

export default class Login extends Component {
  state = {
    user: '',
    pwd: '',
    email:'',
    num:'',
    sname:''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handle Submit');
    console.log(this.state);
    localStorage.setItem(this.state.user, JSON.stringify(this.state));
    this.setState({
      user: '',
      email:'',
      pwd: '',
    });

    this.props.history.push('/employees');
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container card mt-5 col-md-6">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
          <h3 className="text-center">SignIn</h3>
            <label htmlFor="exampleInputName1">Name/Email</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              value={this.state.user}
              onChange={this.handleChange}
              name="user"
            />
            <br></br>
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.pwd}
              onChange={this.handleChange}
              name="pwd"
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
