import FactoryImage from '../FactoryImage';

export default function author(state=[],action){

    const factory = new FactoryImage(require.context('../../assets/img/authors/', false, /\.(png|jpe?g|svg)$/));

    if(action.type === 'GET-ALL-AUTHORS'){
        return action.authors.map(author => {
            return {...author,image:factory.getImage(author.id)}
        });
    }

    return state;
}