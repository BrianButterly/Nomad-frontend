import React from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap'
import { currentUser } from '../actions/auth'
import { connect } from 'react-redux'

class Home extends React.Component {

    // componentDidMount(){
    //     const token = localStorage.getItem('app_token')
    //   if (!token){
    //     this.props.history.push('/')
    //   } else {
    //     const reqObj = {
    //       method: 'GET',
    //       headers: {
    //         'Authorization': `Bearer ${token}`
    //       },
    //     }
    //     fetch('http://localhost:3000/api/v1/sessions/current_session', reqObj)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data)
    //         this.props.currentUser(data.user)
    //     })
    // }
    // }

    render() {
        return (
            <div>
                <a href="/stays"><Button variant="light" >Previous Trips</Button></a>
                <CardColumns>
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>The Best Ski Resorts In The World</Card.Title>
                            <Card.Text>
                                The 20 best ski resorts from around the world.
                            </Card.Text>
                        <Card.Img src="ski.jpg" />
                            <Button href="https://www.cntraveller.com/gallery/best-ski-resorts-in-the-world" target="_blank" variant="light">Learn More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>The Best Scuba Diving In The World</Card.Title>
                            <Card.Text>
                                Some of the best and most beautiful dive sites in the world.
                            </Card.Text>
                        <Card.Img src="scuba.jpg" />
                            <Button href="https://www.scubadiving.com/best-scuba-diving-places" target="_blank" variant="light">Learn More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>The Best Sunsets In The World</Card.Title>
                            <Card.Text>
                                Witness some of the most beautiful sunsets in the world.e.
                            </Card.Text>
                        <Card.Img src="sunset.jpeg" />
                            <Button href="https://www.roughguides.com/gallery/the-worlds-best-sunset-spots/" target="_blank" variant="light">Learn More</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
        )
    }

}


const mapDispatchToProps = {
    currentUser
}

export default connect(null, mapDispatchToProps)(Home);