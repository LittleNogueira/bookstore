import React from 'react';
import Layout from '../../layouts/store/Layout';
import { Row, Col } from 'react-bootstrap';
import Author from '../../components/author/Author';
import AuthorApi from '../../utils/api/author';
import FactoryImage from '../../utils/FactoryImage';

class List extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            authors:[]
        }
        this.factoryImageAuthor = new FactoryImage(require.context('../../assets/img/authors/', false, /\.(png|jpe?g|svg)$/));
    }

    componentDidMount(){
        AuthorApi.getAll().then(res => {
            this.setState({authors:res.data.map(author => {
                    return {...author,image:this.factoryImageAuthor.getImage(author.id)}
                })
            });
        });
    }

    listAuthors(){
        return this.state.authors.map(author => {
            return (
                <Col key={author.id} xs="12" sm="12" md="6" lg="4" xl="3" >
                    <Author link={`/authors/${author.id}`} image={author.image} name={`${author.firstName} ${author.lastName}`} />
                </Col>
            ); 
        });
    }

    render(){
        return (
            <Layout>
                <h1>Authors</h1>
                <Row>
                    {this.listAuthors()}
                </Row>
            </Layout>
        );
    }

}

export default List;