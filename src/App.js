import React, {Component} from 'react';
import Login from './components/Login/Login'
import Flights from './components/Flights/Flights'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter className="App">
                <Switch>
                    <Route path="/flights" component={Flights}/>
                    <Route path="/" component={Login}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
