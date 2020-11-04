import React from 'react';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchUserSuccess } from '../actions/user'
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
                    // this.props.loginSuccess(data)
                    this.props.fetchUserSuccess(data)
                    this.props.history.push('/home')
                }
            })
    }

    render() {
        return (
            <div>
                <h3>Sign in</h3>
                { this.state.error && <h4 style={{ color: 'red'}}>{this.state.error}</h4> }
                <form onSubmit={this.handleSubmit}>
                <input name={'username'} onChange={this.handleChange} value={this.state.username} placeholder={'username'} />
                <input type={'password'} name={'password'} onChange={this.handleChange} value={this.state.password} placeholder={'password'} />
                <input className="btn btn-light" type='submit' value='login' />
                <a href="/signup"><Button variant="light" >Signup</Button></a>
                </form>
            </div>
            // <div className="login">
            //     <Form>
            //         <Form.Group controlId="formBasicEmail">
            //             <Form.Label>Username</Form.Label>
            //             <Form.Control 
            //             onChange={this.handleChange}
            //             type="username" 
            //             placeholder="Username" 
            //             />
            //         </Form.Group>
            //         <Form.Group controlId="formBasicPassword">
            //             <Form.Label>Password</Form.Label>
            //             <Form.Control
            //             onChange={this.handleChange}
            //             type="password" 
            //             placeholder="Password" 
            //             />
            //         </Form.Group>
            //         <Button onSubmit={this.handleSubmit} variant="light" >Login</Button>
            //         <a href="/signup"><Button variant="light" >Signup</Button></a>
            //     </Form>
            // </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

const mapDispatchToProps = {
    fetchUserSuccess,
    loginSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
  