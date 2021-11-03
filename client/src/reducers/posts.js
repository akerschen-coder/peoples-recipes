export default  (posts = [], action) => {
    if(action.type === 'CREATE') {
        switch (action.type) {
            case 'FETCH_ALL':
                return action.payload;
            case 'CREATE':
                return posts;
            default:
                return posts;
        }
    }
}