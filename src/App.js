import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    //https://uttpic.tech/checkcar/vin=value1&password=value2
    event.preventDefault();
    const vin = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // fetch(`https://uttpic.tech/checkcar/${vin}/${password}`, res => {
    //   if (res.OK){

    //   }
    // })
    this.props.history.push("/next-view");
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter your VIN:
              <input type="text" id="username" placeholder="VIN" />
            </label>

            <br />
            <label>
              Enter you passcode:
              <input
                type="password"
                id="password"
                placeholder="Choose Password"
              />
              <br />
            </label>
            <button>Login</button>
          </form>
        </header>
      </div>
    );
  }
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Route path="/login" component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
