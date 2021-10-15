import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import recipes from './images/recipes.png';
const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography varaint="h2" align="center">The People's Recipes</Typography>
                <img src={recipes} alt="recipes" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
