import React, {Component} from 'react'
import {withRouter} from 'react-router'
import './Login.css'

class Login extends Component {
    state = {
        username: '',
        password: '',
        error: null
    }

    login = (e) => {
        e.preventDefault()
        const isValidLogin = this.state.username === 'user' && this.state.password === 'password'
        if (!isValidLogin) {
            this.setState({error: 'Wrong user or password'})
            return
        }
        this.props.history.push('/flights')
    }

    setUserName = (e) => {
        this.setState({username: e.target.value})
    }

    setPassword = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.login} className="login card">
                <input className="text-field"
                    type="text"
                    placeholder="user"
                    value={this.state.username}
                    onChange={this.setUserName}/>
                <input className="text-field" type="password"
                       placeholder="password"
                       value={this.state.password}
                       onChange={this.setPassword}
                />
                <button className="submit" type="submit">Login</button>
                {this.state.error ? <span className="error">{this.state.error}</span> : null}
            </form>
        )
    }
}

export default withRouter(Login);
