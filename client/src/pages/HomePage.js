import React, { useState, useEffect } from "react";
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

import { SAVE_RECIPE } from "../utils/mutations";
import { saveRecipeIds, getSavedRecipeIds } from "../utils/localStorage";

export default function Intro() {
    // search
    // handle search change
    // have to figure out exactly what were pulling to display
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());
    const [saveRecipe, {error}] = useMutation(SAVE_RECIPE);

    useEffect(() => {
        return () => saveRecipeIds(savedRecipeIds);
    });

    // formsubmit function
    //has to target form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!searchInput) {
            return false;
        }
        try {
            const response = await fetch(
                `https://api.edamam.com/api/recipes/v2?type=public&q=` +
                `${searchInput}` +
                `&app_id=0bef8d90&app_key=3aa6e2558540ee0b95bb5b427b5c3a98`,
                {
                    mode: "cors",
                    headers: {
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("something went wrong!");
            }
            const { hits } = await response.json();
            const recipeD = hits.map((hit) => ({
                foodId: hit.recipe.uri,
                label: hit.recipe.label,
                link: hit.recipe.url,
                image: hit.recipe.image || "",
            }));
            setSearchedRecipes(recipeD);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };
    // function to save recipe
    const handleSaveRecipe = async (foodId) => {
        // find the book in `searchedBooks` state by the matching id
        const recipeToSave = searchedRecipes.find(
            (recipe) => recipe.foodId === foodId
        );
    
        console.log(recipeToSave);
        // get token
        
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log(token);

        if (!token) {
            return false;
        }
        
        try {
            const { data } = await saveRecipe({
                variables: { recipeData: {...recipeToSave}  },
            });

            console.log(recipeToSave);
            console.log(data);

            if (!data) {
                throw new Error(error);
            }

            setSavedRecipeIds([...savedRecipeIds, recipeToSave.foodId]);


        } catch (error) {
            console.error(error);
        }

    };
    return (
        <>
            <Jumbotron fluid className="text-light bg-info">
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
                <CardColumns>
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
                                    <Card.Title style={{textAlign: "center"}}> {recipe.label}</Card.Title>
                                    <Button href={recipe.link} target="_blank" className="btn-block btn-info">
                                    Recipe
                                        </Button>
                                    {Auth.loggedIn() && (
                                        <Button
                                            disabled={savedRecipeIds?.some(
                                                (savedRecipeId) => savedRecipeId === recipe.foodId
                                            )}
                                            className="btn-block btn-info"
                                            onClick={() => handleSaveRecipe(recipe.foodId)}>
                                                
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
                </CardColumns>
            </Container>
        </>
    );
}
