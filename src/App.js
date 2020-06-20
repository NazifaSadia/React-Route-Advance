import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import MyRoute from './Components/MyRoute';
import MyNav from './Components/MyNav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav/>
        <MyRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
