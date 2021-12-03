import { Container, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { React, useState, useEffect } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import Auth from '../utils/auth';

import { SAVE_RECIPE } from '../utils/mutations';
import { GET_ALL } from '../utils/queries'
import { saveRecipeIds, getSavedRecipeIds } from '../utils/localStorage';


const HomepageSaver = () => {
    // const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);
    // // create state to hold saved recipeId values
    // const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());

    // useEffect(() => {
    //     return () => saveRecipeIds(savedRecipeIds);
    // });

    // // create state for holding the databases saved recipes
    // // how to connect it to the database though?? 

    // const { loading, data } = useQuery(GET_ALL);

    // const recipeData = data?.all || {};

    // const handleSaveRecipe = async (recipeId) => {
    //     //need to change searchedbooks to search our database 
    //     const recipeToSave = peoplesRecipes.find((recipe) => recipe.recipeId === recipeId);

    //     // get token
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //         return false;
    //     }

    //     try {
    //         const { data } = await saveRecipe({
    //             variables: { recipeData: { ...recipeToSave } }
    //         });

    //         // if recipe successfully saves to user's account, save  recipeid to state
    //         setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId]);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // return (
    //     <>
    //         <Container>
    //             <CardColumns>
    //                 {recipeData.map((recipe) => {
    //                     return (
    //                         <Card key={recipe.recipeId} style={{ width: '18rem' }}>
    //                             <Card.Img variant="top" src={recipe.image} />
    //                             <Card.Body>
    //                                 <Card.Title>{recipe.name}</Card.Title>
    //                                 <Card.Text>
    //                                     {recipe.ingredients}
    //                                 </Card.Text>
    //                                 <Card.Text>
    //                                     {recipe.directions}
    //                                 </Card.Text>
    //                                 {Auth.loggedIn() && (
    //                                     <Button
    //                                         disabled={savedRecipeIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)}
    //                                         className='btn-block btn-info'
    //                                         onClick={() => handleSaveRecipe(recipe.recipeId)}>
    //                                         {savedRecipeIds?.some((savedRecipeId) => savedRecipeId === recipe.recipeId)
    //                                             ? 'This recipe has already been saved!'
    //                                             : 'Save this recipe!'}
    //                                     </Button>
    //                                 )}
    //                             </Card.Body>
    //                         </Card>
    //                     )
    //                 })}
    //             </CardColumns>
    //         </Container>
    //     </>
    // )
    return (
        <Container>
            Homepage
        </Container>
    )
}
export default HomepageSaver;