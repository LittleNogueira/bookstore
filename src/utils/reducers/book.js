
const importAll = (r) => {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/img/books/', false, /\.(png|jpe?g|svg)$/));

const getImage = (book) => {
    let index = book.id;

    while(index > images.length){
        index = index/images.length;
    }

    return images[index - 1];
} 

function book(state=[],action){

    if(action.type === 'GET-ALL-BOOKS'){
        return action.books.map(book => {
            return {...book,image:getImage(book)};
        });
    }

    return state;

}

export default book;