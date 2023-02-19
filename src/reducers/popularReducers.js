export default (popular=[], action) => {
    switch(action.type){
        case 'Pass':
            return action.payload;
        default:
            return popular;
    }
}