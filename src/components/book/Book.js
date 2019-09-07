import React from 'react';
import './book.css';

import { ButtonGroup, Button } from 'react-bootstrap';

import Modal from '../../components/modal/Modal';
import FactoryImage from '../../utils/FactoryImage';
import BookApi from '../../utils/api/book';
import FormBook from '../../pages/book/form/Form';

class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModalEdit: false,
            showModalDelete: false,
            disable: false
        }
        this.factoryImageBook = new FactoryImage(require.context('../../assets/img/books/', false, /\.(png|jpe?g|svg)$/));
    }

    showAndHiddenModalDelete = () => {
        this.setState({ showModalDelete: !this.state.showModalDelete });
    }

    showAndHiddenModalEdit = () => {
        this.setState({ showModalEdit: !this.state.showModalEdit });
    }

    deleteBook = () => {
        this.setState({ disable: true });
        BookApi.delete(this.props.book.id).then(res => {
            this.showAndHiddenModalDelete();
            this.props.callbackDelete(res);
        }).catch(res => {
            this.props.callbackDelete(res);
        }).finally(() => {
            this.setState({ disable: false });
        });
    }

    callbackConfirm = (res) => {
        if (res.status === 200) {
            this.showAndHiddenModalEdit();
        }
        this.props.callbackConfirm(res);
    }

    render() {

        const { book } = this.props;
        const { showModalDelete, disable, showModalEdit } = this.state;

        return (
            <div className="book" >
                <img src={this.factoryImageBook.getImage(book.id)} alt="book" />
                <div className="book-description" >
                    <h1 className="book-title" >{book.title}</h1>
                    <p className="book-subtitle" >{book.isbn}</p>
                </div>
                <ButtonGroup size="sm" className="mt-3 book-options">
                    <Button variant="outline-primary" onClick={() => this.showAndHiddenModalEdit()} >Edit</Button>
                    <Button variant="outline-danger" onClick={() => this.showAndHiddenModalDelete()} >Delete</Button>
                </ButtonGroup>

                <Modal
                    show={showModalDelete}
                    title="Are you sure?"
                    actionCancel={this.showAndHiddenModalDelete.bind(this)}
                    actionConfirm={this.deleteBook.bind(this)}
                    disable={disable}>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal>

                <FormBook callbackConfirm={this.callbackConfirm.bind(this)} actionCancel={this.showAndHiddenModalEdit.bind(this)} show={showModalEdit} book={book} />
            </div>
        );
    }
}

export default Book;