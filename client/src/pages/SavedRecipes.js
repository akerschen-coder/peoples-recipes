import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
export default function Intro() {
    return (
        <Container>
            {/* need to run it through the persons tokens, with auth I think to get persons books n such? */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        This will be the ingrediants
                    </Card.Text>
                    <Card.Text>
                        This will be the directions
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}