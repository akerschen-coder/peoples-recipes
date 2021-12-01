import { Container, Form, Button, } from 'react-bootstrap';
import Auth from '../utils/auth';
import React from 'react';

export default function Intro() {
    return (
        <Container>
            {Auth.loggedIn() ? ( 
                 <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name of Recipe</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Ingredients and Measurements</Form.Label>
                    <Form.Control type="ingredients" placeholder="chicken, bacon, etc" />
                    <Form.Text className="text-muted">
                        Put commas between ingredients
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Directions</Form.Label>
                    <Form.Control type="directions" placeholder="chicken, bacon, etc" />
                    <Form.Text className="text-muted">
                        Put commas between steps
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Have an Image?</Form.Label>
                    <Form.Control type="image" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </>
            ): (
                <Container>Sign In To Post Grandma's Secrets!</Container>
            )} 
            {/* need to put all posts here */}
            {/* have a with auth for liking them or not <3 */}
        </Container>
    )
}