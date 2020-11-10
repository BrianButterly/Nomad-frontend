import React from 'react';
import { Form, Button, Col } from 'react-bootstrap'

class Signup extends React.Component {

    state = {
        username: "",
        password: "",
        location: "",
        error: null
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

        fetch('http://localhost:3000/users', reqObj)
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    this.setState({
                      error: data.error
                    })
                  } else {
                    this.props.createUserSuccess(data)
                    this.props.history.push('/home')
                }
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div className="form">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label variant="light">Username</Form.Label>
                        <Form.Control name="username" type="username" placeholder="Username" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group name="location" as={Col} controlId="formGridCity" placeholder="City" onChange={this.handleChange} >
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="light" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;