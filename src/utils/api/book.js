import API from '../../config/axios';

const BookApi = {

    getAll: () =>{
        return API.get('/books');
    },

    replaceOrCreate: (data) => {
        return API.post('/books/replaceOrCreate',data);
    },

    delete: (id) => {
        return API.delete(`/books/${id}`);
    }

}

export default BookApi;