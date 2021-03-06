import React from "react";
import {
  Container,
  Card,
  Button,
  CardColumns,
  Jumbotron,
} from "react-bootstrap";

import { useMutation, useQuery } from "@apollo/client";

import { GET_USER } from "../utils/queries";
import { REMOVE_RECIPE } from "../utils/mutations";

import Auth from "../utils/auth";
import { removeRecipeId } from "../utils/localStorage";

const SavedRecipe = () => {
  const { loading, data } = useQuery(GET_USER);
  const [removeRecipe, { error }] = useMutation(REMOVE_RECIPE);

  const userData = data?.me || {};



  const handleDeleteRecipe = async (foodId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(foodId);
    if (!token) {
      return false;
    }

    try {
      await removeRecipe({
        variables: { foodId: foodId },
      });

      removeRecipeId(foodId);
    } catch (err) {
      console.error(error);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  //yes

  return (
    <>
      <Jumbotron fluid className="text-light bg-info">
        <Container>
          <h1> Viewing {userData.username}'s saved recipes!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedRecipes?.length
            ? `Viewing ${userData.savedRecipes.length} saved ${userData.savedRecipes.length === 1 ? "recipe" : "recipes"
            }:`
            : "You have no saved recipes!"}
        </h2>
        <CardColumns>
          {userData.savedRecipes?.map((recipe) => {
            return (
              <Card key={recipe.foodId} style={{ width: "18rem" }}>
                {recipe.image ? (
                  <Card.Img
                    src={recipe.image}
                    alt={`The image for ${recipe.label}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {recipe.label}
                  </Card.Title>
                  <Button
                    href={recipe.link}
                    target="_blank"
                    className="btn-block btn-info"
                  >
                    Go to this recipe?
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleDeleteRecipe(recipe.foodId)}
                  >
                    {" "}
                    Delete this recipe
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedRecipe;
