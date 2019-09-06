import React from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import Author from '../../components/author/Author';
import AuthorApi from '../../utils/api/author';
import FactoryImage from '../../utils/FactoryImage';
import Layout from '../../layouts/store/Layout';
import FormAuthor from './Form';
import {Notyf} from 'notyf';

class List extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            authors:[],
            showModal: false
        }
        this.factoryImageAuthor = new FactoryImage(require.context('../../assets/img/authors/', false, /\.(png|jpe?g|svg)$/));
        this.notyf = new Notyf();
    }

    componentDidMount(){
        this.loadAuthors();
    };

    loadAuthors = () => {
        AuthorApi.getAll().then(res => {
            this.setState({authors:res.data.map(author => {
                    return {...author,image:this.factoryImageAuthor.getImage(author.id)}
                })
            });
        });
    };

    listAuthors(){
        return this.state.authors.map(author => {
            return (
                <Col key={author.id} xs="12" sm="12" md="6" lg="4" xl="3" >
                    <Author link={`/authors/${author.id}`} image={author.image} name={`${author.firstName} ${author.lastName}`} />
                </Col>
            ); 
        });
    };

    showAndHiddenModal = () => {
        this.setState({showModal:!this.state.showModal});
    };

    callBackCreate = (res) => {
        this.showAndHiddenModal();
        if(res.status === 200){
            this.notyf.success('Author successfully created.');
            this.loadAuthors();
        }else{
            this.notyf.error('Unexpected error.');
        }
    };  
    
    render(){

        const {showModal} = this.state;

        return (
            <Layout>
                <div className="top-list" >
                    <h1>Authors</h1>
                    <Button variant="outline-primary" onClick={() => this.showAndHiddenModal()} >Create +</Button>
                </div>
                <Row>
                    {this.listAuthors()}
                </Row>
                <FormAuthor actionConfirm={this.callBackCreate.bind(this)} actionCancel={this.showAndHiddenModal.bind(this)} show={showModal} />
            </Layout>
        );
    }

}

export default List;