import API from '../../config/axios';

const BookApi = {

    getAll: () =>{
        return API.get('/books');
    }

}

export default BookApi;