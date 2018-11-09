import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h2>our react app</h2>
        <Footer />
      </div>
    );
  }
}

export default App;
