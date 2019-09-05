import AuthorApi from '../api/author';
import {getAllAuthors} from '../actions/author';

const AuthorService = {

    getAllAuthors: () => {
        return dispatch => {
            AuthorApi.getAll().then(res => {
                dispatch(getAllAuthors(res.data));
            })
        };
    }

};

export default AuthorService;