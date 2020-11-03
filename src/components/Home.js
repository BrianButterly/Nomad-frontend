import React from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap'


class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Previous Trip</h1>
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

export default Home;