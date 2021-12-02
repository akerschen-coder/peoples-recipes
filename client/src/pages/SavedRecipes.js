// import React from 'react';
// import { Container, Card, Button, Jumbotron, CardColumns } from 'react-bootstrap';
// import { useMutation, useQuery } from '@apollo/client';

// // gets all saved recipes 
// import { GET_USER } from '../utils/queries';
// //able to delete recipes 
// import { REMOVE_RECIPE } from '../utils/mutations';

// import Auth from '../utils/auth';
// import { removeRecipeId } from '../utils/localStorage';

// const savedRecipes = () => {
//     const { loading, data } = useQuery(GET_USER);
//     const [removeRecipe, { error }] = useMutation(REMOVE_RECIPE);

//     const userData = data?.me || {};
//     console.log(Auth.getToken());

//     const handleDeleteRecipe = async (recipeId) => {
//         const token = Auth.loggedIn() ? Auth.getToken() : null;

//         if (!token) {
//             return false;
//         }
//         try {
//             const { data } = await removeRecipe({
//                 variables: { recipeId }
//             });

//             removeRecipeId(recipeId);

//         } catch (err) {
//             console.error(err);
//         }

//         if (loading) {
//             return <h2>LOADING...</h2>;
//         }
//     }

//     return (
//         <>
//             <Jumbotron fluid className='text-light bg-dark'>
//                 <Container>
//                     <h1> Viewing saved recipes!</h1>
//                 </Container>
//             </Jumbotron>
//             <Container>
//                 <h2>
//                     {userData.savedRecipes?.length
//                         ? `Viewing ${userData.savedRecipes.length} saved ${userData.savedRecipes.length === 1 ? 'recipe' : 'recipes'}:` : 'You have no saved recipes!'
//                     }
//                 </h2>
//                 <CardColumns>
//                     {userData.savedRecipes?.map((recipe) => {
//                         <Card style={{ width: '18rem' }} key={recipe.recipeId} border='dark'>
//                             {recipe.image ? <Card.Img src={recipe.image} alt={`The image for ${recipe.name}`} variant='top' /> : null}
//                             <Card.Body>
//                                 <Card.Title>{recipe.name}</Card.Title>
//                                 <Card.Text>
//                                     Ingredients: {recipe.ingredients}</Card.Text>
//                                 <Card.Text>
//                                     Directions: {recipe.directions}
//                                 </Card.Text>
//                                 <Button variant="primary" onClick={() => handleDeleteRecipe(recipe.recipeId)}>Delete This Recipe?</Button>
//                             </Card.Body>
//                         </Card>
//                     })}

//                 </CardColumns>
//             </Container>
//         </>
//     )
// }

// export default savedRecipes;