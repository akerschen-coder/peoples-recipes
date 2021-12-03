import React from 'react';
import { Container, Card, Button, Jumbotron, CardColumns } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';

// gets all saved recipes 
import { GET_USER } from '../utils/queries';
//able to delete recipes 
import { REMOVE_RECIPE } from '../utils/mutations';

import Auth from '../utils/auth';
import { removeRecipeId } from '../utils/localStorage';

const savedRecipes = () => {
    return (
        <Container>
            saved recipes
        </Container>
    )
}

export default savedRecipes;