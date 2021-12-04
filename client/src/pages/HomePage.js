import React, { useState } from "react";
import {
    Card,
    CardColumns,
    Col,
    Jumbotron,
    Container,
    Form,
    Button,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";

export default function Intro() {
    // search
    // handle search change
    // have to figure out exactly what were pulling to display
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    const [searchInput, setSearchInput] = useState("");

    // formsubmit function
    //has to target form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await fetch(
                `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInput}&app_id=b1be71ba561901dcc4bdbbd96d737834';`, {
                mode: "opaque",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                },
            }
            );
            console.log(response);
            if (!response.ok) {
                throw new Error("something went wrong!");
            }


            const { items } = await response.json();

            const recipeData = items.map((recipe) => ({
                foodId: recipe.id,
            }));

            setSearchedRecipes(recipeData);
            setSearchInput("");
        } catch (err) {
            console.error(err);
        }
    };

    //later, lets just get recipes up first
    // function to save recipe

    return (
        <>
            <Jumbotron fluid className="text-light bg-dark">
                <Container>
                    <h1>Search for Recipes!</h1>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Row>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name="searchInput"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type="text"
                                    size="lg"
                                    placeholder="Search for a recipe"
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type="submit" variant="success" size="lg">
                                    Submit Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>
            <Container>
                <h2>
                    {searchedRecipes.length
                        ? `Viewing ${searchedRecipes.length} results:`
                        : "Search for a recipe to begin"}
                </h2>
                {/* <CardColumns>
          {searchedRecipes.map((recipe) => {
            return (
              <Card key={recipe.foodId} border="dark">
                {recipe.image ? (
                  <Card.Img
                    src={recipe.image}
                    alt={`The cover for ${recipe.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <p className="small">Authors: {recipe.authors}</p>
                  <Card.Text>{recipe.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedRecipeIds?.some(
                        (savedRecipeId) => savedRecipeId === recipe.foodId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveRecipe(recipe.foodId)}
                    >
                      {savedRecipeIds?.some(
                        (savedRecipeId) => savedRecipeId === recipe.foodId
                      )
                        ? "This recipe has already been saved!"
                        : "Save this Recipe!"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns> */}
            </Container>
        </>
    );
}
