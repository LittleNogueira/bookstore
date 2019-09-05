import API from '../../config/axios';

const AuthorApi = {

    getAll: () =>{
        return API.get('/authors');
    }

}

export default AuthorApi;