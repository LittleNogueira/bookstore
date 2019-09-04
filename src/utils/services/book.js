import BookApi from '../api/book';
import {getAllBooks} from '../actions/book';

const BookService = {
    getAllBooks: () => {
        return dispatch => {
            BookApi.getAll().then(books => {
                dispatch(getAllBooks(books.data));
            });
        }
    }
}

export default BookService;