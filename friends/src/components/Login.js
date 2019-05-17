import React from 'react'
import { login } from '../actions'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    loginSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.loginSubmit}>
                    <input
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}>
                    </input>
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}>
                    </input>
                    <button onClick={this.loginSubmit}>{this.props.isLoggingIn ? (
                        <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ):( 'Log In')}</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn:state.isLoggingIn
})

export default connect(
    mapStateToProps, { login }
)(Login)