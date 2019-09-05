export function getAllAuthors(authors){
    return {type:'GET-ALL-AUTHORS',authors};
}

export function deleteAuthor(id){
    return {type:'DELETE-AUTHOR',id};
}