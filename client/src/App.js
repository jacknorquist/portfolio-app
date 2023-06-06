import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './Components/Sidebar/SideBar.jsx';
import NewFishPopup from './Components/NewFishPopUp/NewFishPopUp.jsx';

class App extends Component {
state = {
    data: null,
  };

  componentDidMount() {
    if (!this.state.data) {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SideBar/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Jack235</h1>
          <h2>Lets Make an App</h2>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;