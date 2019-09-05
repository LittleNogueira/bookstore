import React from 'react';
import './info.css';
import Layout from '../../layouts/store/Layout';
import AuthorApi from '../../utils/api/author';
import { Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';
import FactoryImage from '../../utils/FactoryImage';
import Book from '../../components/book/Book';

export default class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: {
                books: []
            }
        };
        this.factoryImageAuthor = new FactoryImage(require.context('../../assets/img/authors/', false, /\.(png|jpe?g|svg)$/));
        this.factoryImageBook = new FactoryImage(require.context('../../assets/img/books/', false, /\.(png|jpe?g|svg)$/));
    }

    componentDidMount() {
        this.loadAuthor();
        this.loadBooks();
    }

    loadAuthor() {
        AuthorApi.getById(this.props.match.params.id).then(res => {
            let books = this.state.author.books;
            this.setState({ author: { ...res.data, image: this.factoryImageAuthor.getImage(res.data.id),books} })
        });
    }

    loadBooks() {
        AuthorApi.getBooksByAuthor(this.props.match.params.id).then(res => {
            let author = this.state.author;
            this.setState({ author: { ...author, books: res.data } });
        });
    }

    listBooks(){
        return this.state.author.books.map(book => {
            return (
                <Col xs="12" sm="12" md="6" lg="4" xl="3"  >
                    <Book title={book.title}
                        subtitle={book.isbn}
                        image={this.factoryImageBook.getImage(book.id)}/>
                </Col>
            );
        });
    }

    dontHaveBooks = () =>{
        return (
            <div className="notification-dont-have-book" >
                <h1>This author doesn't have any books</h1>
            </div>
        );
    }

    teste(){
        if(this.state.author.books.length){
            return (<Row>{this.listBooks()}</Row>);
        }else{
            return this.dontHaveBooks();
        }
    }

    render() {

        const {author} = this.state;

        return (
            <Layout>
                <div>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="5" xl="5"  >
                            <h1>Author</h1>
                            <div className="author-info text-center" >
                                <Image roundedCircle thumbnail src={author.image} />
                                <h1 className="name" >{`${author.firstName} ${author.lastName}`}</h1>
                                <p className="description" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque imperdiet volutpat volutpat.
                                    Pellentesque eu metus diam. Maecenas feugiat in lorem sit amet vehicula.
                                    Pellentesque tempus odio leo, quis aliquam erat ultricies sed.
                                    Quisque malesuada urna massa, posuere commodo orci elementum dignissim.
                                    Maecenas luctus euismod iaculis. Suspendisse egestas dui sit amet placerat pretium.
                                </p>
                                <ButtonGroup className="mt-3 options">
                                    <Button variant="outline-primary" >Editar</Button>
                                    <Button variant="outline-danger" >Excluir</Button>
                                </ButtonGroup>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="7" xl="7"  >
                            <h1>Books</h1>
                            {this.teste()}
                        </Col>
                    </Row>
                </div>
            </Layout>
        );
    }
}