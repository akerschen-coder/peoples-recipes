//gotta check to make sure its connecting properly 
import * as api from '../api';

// action creators 
//action is just an object with type and payload
// to get posts 
// using redux-thunk 
// making it so that its async but means having 2 arrow functions in one 
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};