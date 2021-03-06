import API from '../../config/axios';

const AuthorApi = {

    getAll: () =>{
        return API.get('/authors');
    },

    getById: (id) => {
        return API.get(`/authors/${id}`);
    },

    getBooksByAuthor: (id) => {
        return API.get(`/authors/${id}/books`);
    },

    delete: (id) => {
        return API.delete(`/authors/${id}`);
    },

    replaceOrCreate: (data) => {
        return API.post('/authors/replaceOrCreate',data);
    }
}

export default AuthorApi;