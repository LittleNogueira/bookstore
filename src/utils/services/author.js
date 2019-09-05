import AuthorApi from '../api/author';
import {getAllAuthors,deleteAuthor} from '../actions/author';

const AuthorService = {

    getAllAuthors: () => {
        return dispatch => {
            AuthorApi.getAll().then(res => {
                dispatch(getAllAuthors(res.data));
            })
        };
    },

    deleteAuthor: (id) => {
        return dispatch => {
            return AuthorApi.delete(id).then(res => {
                dispatch(deleteAuthor(id));
            });
        }
    }

};

export default AuthorService;