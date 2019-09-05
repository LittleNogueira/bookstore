export default function author(state=[],action){
    if(action.type === 'GET-ALL-AUTHORS'){
        return action.authors;
    }

    return state;
}