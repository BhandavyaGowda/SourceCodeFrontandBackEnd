import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">        
    <Link className="navbar-brand" to="/">
    Employee Management App
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/signup">
            SignUp Account{" "}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            SignIn Account
          </Link>
        </li>
      </ul>
    </div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeaderComponent
