import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SavedRecipes from './pages/SavedRecipes';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// still need main path 
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/saved' element={<SavedRecipes/>} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
