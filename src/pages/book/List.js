import React from 'react';
import Layout from '../../layouts/store/Layout';
import Book from '../../components/book/Book';
import { Row, Col } from 'react-bootstrap';
import BookApi from '../../utils/api/book';
import FactoryImage from '../../utils/FactoryImage';

class List extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      books:[]
    }
    this.factoryImageBook = new FactoryImage(require.context('../../assets/img/books/', false, /\.(png|jpe?g|svg)$/));
  }

  componentDidMount(){
    BookApi.getAll().then(res => {
      this.setState({books:res.data.map(book => {
              return {...book,image:this.factoryImageBook.getImage(book.id)}
          })
      });
    });
  }

  listBooks = () => {
    return this.state.books.map(book => {
      return (
        <Col key={book.id} xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book
            title={book.title}
            subtitle={book.isbn}
            image={book.image} />
        </Col>
      );
    });
  }

  render() {
    return (
      <Layout>
        <h1>Books</h1>
        <Row>
          {this.listBooks()}
        </Row>
      </Layout>
    );
  }
}

export default List;