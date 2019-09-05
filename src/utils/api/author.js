import API from '../../config/axios';

const AuthorApi = {

    getAll: () =>{
        return API.get('/authors');
    },

    getById: (id) => {
        return API.get(`/authors/${id}`);
    }

}

export default AuthorApi;