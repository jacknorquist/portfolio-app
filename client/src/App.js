import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './Components/Sidebar/SideBar.jsx';
import NewFishPopup from './Components/NewFishPopUp/NewFishPopUp.jsx';
import OpeningPage from './Components/Mainpage/MainPage.jsx'; 

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
        <OpeningPage />
        <SideBar/>
        </header>
        
      </div>
    );
  }
}

export default App;