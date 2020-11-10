import React from 'react';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/auth'

class Login extends React.Component {

    state = {
        username: "",
        password: "",
        error: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/api/v1/auth', reqObj)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    this.setState({
                      error: data.error
                    })
                  } else {
                    localStorage.setItem('app_token', data.token)

                    this.props.loginSuccess(data.user)
                    this.props.history.push('/home')
                }
            })
    }

    render() {
        return (
            <div className="login">
                <h3>Current user</h3>
                { this.state.error && <h3 style={{ color: '#FF2800'}}>{this.state.error}</h3> }
                <form onSubmit={this.handleSubmit}>
                <input name={'username'} onChange={this.handleChange} value={this.state.username} placeholder={'username'} />
                <input type={'password'} name={'password'} onChange={this.handleChange} value={this.state.password} placeholder={'password'} /><br/>
                <input style={{color: "#343A40"}} className="btn btn-light" type='submit' value='login' /><br/>
                <div className="line"/>
                <h4 className="newuser" >New user</h4>
                <a href="/signup"><Button style={{color: "#343A40"}} variant="light" >Signup</Button></a>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
  