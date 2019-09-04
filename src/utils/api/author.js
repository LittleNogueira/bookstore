import API from '../../config/axios';

const AuthorApi = {

    getAll: () =>{
        return API.get('/authors').then(res => res.json);
    }

}

export default AuthorApi;