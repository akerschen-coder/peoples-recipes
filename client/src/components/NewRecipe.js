import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";

import { CREATE_RECIPE } from "../utils/mutations";

const newRecipe = () => {
  //call in my mutations to run through
  const [createRecipe, { error }] = useMutation(CREATE_RECIPE);
  const [formData, setFormData] = useState({
    name: "",
    ingredients: [""],
    directions: [""],
    image: "",
  });
  // handle input from form

  // make function to handle change/ submit
  // make empty array for directions and ingredients to be able to push int
  // break up string by commas or by input boxes
  //then be able to push into the setFormData

  // run through mutation when form is submitted a

  return (
    <Container>
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
          <Form.Text className="text-muted">Put commas between steps</Form.Text>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Have an Image?</Form.Label>
          <Form.Control type="image" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default newRecipe;
