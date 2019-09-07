import React from 'react';
import './info.css';

import { Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';
import { Notyf } from 'notyf';
import { Redirect } from 'react-router-dom';

import Layout from '../../layouts/store/Layout';
import AuthorApi from '../../utils/api/author';
import FactoryImage from '../../utils/FactoryImage';
import Book from '../../components/book/Book';
import Modal from '../../components/modal/Modal';
import FormAuthor from './Form';
import FormBooK from '../book/Form';

class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: {
                books: []
            },
            redirect: false,
            showModalDelete: false,
            showModalEdit: false,
            showModalCreateBook: false,
            disable: false
        };

        this.factoryImageAuthor = new FactoryImage(require.context('../../assets/img/authors/', false, /\.(png|jpe?g|svg)$/));
        this.factoryImageBook = new FactoryImage(require.context('../../assets/img/books/', false, /\.(png|jpe?g|svg)$/));
        this.notyf = new Notyf();
        this.redirect = false;
    }

    componentDidMount() {
        this.loadAuthorWithBooks();
    }

    loadAuthorWithBooks = () => {
        this.loadAuthor();
        this.loadBooks();
    }

    loadAuthor() {
        AuthorApi.getById(this.props.match.params.id).then(res => {
            let books = this.state.author.books;
            this.setState({ author: { ...res.data, image: this.factoryImageAuthor.getImage(res.data.id), books } })
        });
    }

    loadBooks() {
        AuthorApi.getBooksByAuthor(this.props.match.params.id).then(res => {
            let author = this.state.author;
            this.setState({ author: { ...author, books: res.data } });
        });
    }

    listBooks() {
        return this.state.author.books.map(book => {
            return (
                <Col key={book.id} xs="6" sm="6" md="6" lg="4" xl="4"  >
                    <Book callbackConfirm={this.callbackEditBook.bind(this)} callbackDelete={this.callbackDeleteBook.bind(this)} book={book} />
                </Col>
            );
        });
    }

    callbackEditBook = (res) => {
        if (res.status === 200) {
            this.loadBooks();
            this.notyf.success('Book successfully edited.');
        } else {
            this.notyf.success('Unexpected error.');
        }
    }

    dontHaveBooks = () => {
        return (
            <div className="notification-dont-have-book" >
                <h1>This author doesn't have any books</h1>
            </div>
        );
    }

    loadContent() {
        if (this.state.author.books.length) {
            return (<Row className="author-books" >{this.listBooks()}</Row>);
        } else {
            return this.dontHaveBooks();
        }
    }

    showAndHiddenModalDelete() {
        this.setState({ showModalDelete: !this.state.showModalDelete });
    }

    showAndHiddenModalEdit() {
        this.setState({ showModalEdit: !this.state.showModalEdit });
    }

    showAndHiddenCreateBook() {
        this.setState({ showModalCreateBook: !this.state.showModalCreateBook });
    }

    deleteAuthor() {
        this.setState({ disable: true });
        AuthorApi.delete(this.state.author.id).then(res => {
            this.showAndHiddenModalDelete();
            this.notyf.success('Author was successfully deleted.');
            this.setState({ redirect: true });
        });
    }

    actionConfirmUpdate = (res) => {
        this.showAndHiddenModalEdit();
        if (res.status === 200) {
            this.notyf.success('Author updated successfully.');
            this.loadAuthorWithBooks();
        } else {
            this.notyf.error('Unexpected error.');
        }

    }

    callbackDeleteBook = (res) => {
        if (res.status === 200) {
            this.loadBooks();
            this.notyf.success('Book successfully deleted.');
        } else {
            this.notyf.success('Unexpected error.');
        }
    }

    callbackCreateBook = (res) => {
        if (res.status === 200) {
            this.showAndHiddenCreateBook();
            this.loadBooks();
            this.notyf.success('Book successfully deleted.');
        } else {
            this.notyf.success('Unexpected error.');
        }
    }

    render() {

        const { author, showModalDelete, showModalEdit, redirect, disable, showModalCreateBook } = this.state;

        if (redirect) {
            return <Redirect to={{ pathname: "/authors" }} />
        }

        return (
            <Layout>
                <div>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="5" xl="5"  >
                            <div className="top-list" >
                                <h1>Author</h1>
                                <ButtonGroup>
                                    <Button variant="outline-primary" onClick={() => this.showAndHiddenModalEdit()} >Edit</Button>
                                    <Button variant="outline-danger" onClick={() => this.showAndHiddenModalDelete()} >Delete</Button>
                                </ButtonGroup>
                            </div>
                            <div className="author-info text-center" >
                                <Image roundedCircle thumbnail src={author.image} />
                                <h1 className="name" >{`${author.firstName} ${author.lastName}`}</h1>
                                <p className="description" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque imperdiet volutpat volutpat.
                                    Pellentesque eu metus diam. Maecenas feugiat in lorem sit amet vehicula.
                                    Pellentesque tempus odio leo, quis aliquam erat ultricies sed.
                                </p>

                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="7" xl="7"  >
                            <div className="top-list" >
                                <h1>Books</h1>
                                <Button variant="outline-primary" onClick={() => this.showAndHiddenCreateBook()} >Create +</Button>
                            </div>
                            {this.loadContent()}
                        </Col>
                    </Row>
                </div>
                <Modal
                    show={showModalDelete}
                    title="Are you sure?"
                    actionCancel={this.showAndHiddenModalDelete.bind(this)}
                    actionConfirm={this.deleteAuthor.bind(this)}
                    disable={disable}>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal>
                <FormAuthor actionConfirm={this.actionConfirmUpdate.bind(this)} actionCancel={this.showAndHiddenModalEdit.bind(this)} author={author} show={showModalEdit} />
                <FormBooK actionConfirm={this.callbackCreateBook.bind(this)} authorId={author.id} show={showModalCreateBook} actionCancel={this.showAndHiddenCreateBook.bind(this)} />
            </Layout>
        );
    }
}

export default Info;