import { Container, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { React, useState } from 'react';

import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { SAVE_RECIPE } from '../utils/mutations';
import { saveRecipeIds, getSavedRecipeIds } from '../utils/localStorage';

const HomepageSaver = () => {
    const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);
    // create state to hold saved recipeId values
    const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());

    useEffect(() => {
        return () => saveRecipeIds(savedRecipeIds);
    });

    // create state for holding the databases saved recipes
    // how to connect it to the database though?? 
    const [peoplesRecipes, setPeoplesRecipes] = useState([]);

    const handleSaveRecipe = async (recipeId) => {
        //need to change searchedbooks to search our database 
        const recipeToSave = peoplesRecipes.find((recipe) => recipe.recipeId === recipeId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await saveRecipe({
                variables: { recipeData: { ...recipeToSave } }
            });

            // if recipe successfully saves to user's account, save  recipeid to state
            setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
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
                ) : (
                    <Container>Sign In To Post Grandma's Secrets!</Container>
                )}
            </Container>

            <Container>
                <CardColumns>
                    {peoplesRecipes.map((recipe) => {
                        return (
                            <Card key={recipe.recipeId} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={recipe.image} />
                                <Card.Body>
                                    <Card.Title>{recipe.name}</Card.Title>
                                    <Card.Text>
                                        {recipe.ingredients}
                                    </Card.Text>
                                    <Card.Text>
                                        {recipe.directions}
                                    </Card.Text>
                                    {Auth.loggedIn() && (
                                        <Button
                                            disabled={savedRecipeIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)}
                                            className='btn-block btn-info'
                                            onClick={() => handleSaveRecipe(recipe.recipeId)}>
                                            {savedRecipeIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)
                                                ? 'This book has already been saved!'
                                                : 'Save this Book!'}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardColumns>
                {/* have a with auth for liking them or not <3 */}
            </Container>
        </>
    )
}
export default HomepageSaver;