import API from '../../config/axios';

const BookApi = {

    getAll: () =>{
        return API.get('/books');
    },

    replaceOrCreate: (data) => {
        return API.post('/books/replaceOrCreate',data);
    }

}

export default BookApi;