const importAll = (r) => {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/img/authors/', false, /\.(png|jpe?g|svg)$/));

const getImage = (author) => {
    let index = author.id;

    let subtrade = 1;

    if(index > images.length){
        subtrade += Math.floor(index/images.length) * images.length;
    }

    if(index < subtrade){
        index = images.length;
        subtrade = 1;
    }

    return images[index - subtrade];
} 

export default function author(state=[],action){
    if(action.type === 'GET-ALL-AUTHORS'){
        return action.authors.map(author => {
            return {...author,image:getImage(author)}
        });
    }

    return state;
}