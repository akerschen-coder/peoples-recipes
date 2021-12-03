import { Container, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { React, useState, useEffect } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import Auth from '../utils/auth';

import { SAVE_RECIPE } from '../utils/mutations';
import { GET_ALL } from '../utils/queries'
import { saveRecipeIds, getSavedRecipeIds } from '../utils/localStorage';


const HomepageSaver = () => {
    return (
        <>
        <Container>
            Homepage
        </Container>
        </>
    )
}
export default HomepageSaver;