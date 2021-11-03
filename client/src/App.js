import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import recipes from './images/recipes.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    //defining it so that it wil be pulled down 
    const dispatch = useDispatch();
    // so that we can use actions 
    useEffect(()=> {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} varaint="h2" align="center">The People's Recipes</Typography>
                <img className={classes.image} src={recipes} alt="recipes" height="60" />
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
