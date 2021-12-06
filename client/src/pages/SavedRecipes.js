import React from 'react';
import { Container, Card, Button, CardColumns } from 'react-bootstrap';

import { useMutation, useQuery } from '@apollo/client';

import { GET_USER } from '../utils/queries';
import { REMOVE_RECIPE } from '../utils/mutations';

import Auth from '../utils/auth';
import { removeRecipeId } from '../utils/localStorage';
import { REMOVE_RECIPE } from '../utils/mutations';

const SavedRecipe = () => {
    const { loading, data } = useQuery(GET_USER);
    const [removeRecipe, { error }] = useMutation(REMOVE_RECIPE);

    const userData = data?.me || {};
    console.log(Auth.getToken());

    const handleDeleteRecipe = async (foodId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeRecipe({
                variables: { foodId }
            });


            removeRecipeId(foodId);
        } catch (err) {
            console.error(error);
        }
    }


    return (
        <>
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                    <h1> Viewing saved recipes!</h1>
                </Container>
            </Jumbotron>
            <Container>
                <h2>
                    {userData.savedRecipes?.length
                        ? `Viewing ${userData.savedRecipes.length} saved ${userData.savedRecipes.length === 1 ? 'recipe' : 'recipes'}:`
                        : 'You have no saved recipes!'}
                </h2>
                <CardColumns>
                    {userData.savedRecipes?.map((recipe) => {
                        return (
                            <Card key={recipe.foodId} style={{ width: '18rem' }}>
                                {recipe.image ? 
                                <Card.Img 
                                src={recipe.image} 
                                alt={`The image for ${recipe.label}`} 
                                variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{recipe.label}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}

                </CardColumns>
            </Container>
        </>
    )
}