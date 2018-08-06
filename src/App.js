import React, {Component} from 'react';
import Login from './components/Login/Login'
import {BrowserRouter} from 'react-router-dom'
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter className="App">
                <Login/>
            </BrowserRouter>
        );
    }
}

export default App;
