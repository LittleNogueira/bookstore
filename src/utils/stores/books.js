
const importAll = (r) => {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/img/books/', false, /\.(png|jpe?g|svg)$/));

const getImage = (book) => {
    const random = Math.floor((Math.random() * (images.length) ) + 0);
    return book.image ? book.image : images[random];
} 

function books(state=[],action){

    if(action.type === 'GET-ALL-BOOKS'){
        return action.books.map(book => {
            return {...book,image:getImage(book)};
        });
    }

    return state;

}

export default books;