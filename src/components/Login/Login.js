import React, {Component} from 'react'
import {withRouter} from 'react-router'

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
            <form onSubmit={this.login}>
                <input
                    type="text"
                    placeholder="user"
                    value={this.state.username}
                    onChange={this.setUserName}/>
                <input type="password"
                       placeholder="password"
                       value={this.state.password}
                       onChange={this.setPassword}
                />
                <button type="submit">Login</button>
                {this.state.error ? <span>{this.state.error}</span> : null}
            </form>
        )
    }
}

export default withRouter(Login);
