export const getSavedBookIds = () => {
    const savedRecipeIds = localStorage.getItem('saved_recipes')
      ? JSON.parse(localStorage.getItem('saved_recipes'))
      : [];
  
    return savedRecipeIds;
  };
  
  export const saveBookIds = (recipeIdArr) => {
    if (recipeIdArr.length) {
      localStorage.setItem('saved_recipes', JSON.stringify(recipeIdArr));
    } else {
      localStorage.removeItem('saved_recipes');
    }
  };
  
//   export const removeBookId = (bookId) => {
//     const savedBookIds = localStorage.getItem('saved_books')
//       ? JSON.parse(localStorage.getItem('saved_books'))
//       : null;
  
//     if (!savedBookIds) {
//       return false;
//     }
  
//     const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
//     localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));
  
//     return true;
  //};
  
