import FactoryImage from '../FactoryImage';

function book(state=[],action){

    const factory = new FactoryImage(require.context('../../assets/img/books/', false, /\.(png|jpe?g|svg)$/));

    if(action.type === 'GET-ALL-BOOKS'){
        return action.books.map(book => {
            return {...book,image:factory.getImage(book.id)};
        });
    }

    return state;

}

export default book;