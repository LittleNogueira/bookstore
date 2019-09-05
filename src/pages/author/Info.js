import React from 'react';
import './info.css';
import Layout from '../../layouts/store/Layout';
import AuthorApi from '../../utils/api/author';
import { Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';
import image from '../../assets/img/authors/author4.png';

export default class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = { author: {}, books: [] };
    }

    componentDidMount() {
        AuthorApi.getById(this.props.match.params.id).then(res => {
            this.setState({ author: { ...res.data } })
        });
    }

    render() {
        return (
            <Layout>
                <div>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="5" xl="5"  >
                            <h1>Author</h1>
                            <div className="author-info text-center" >
                                <Image roundedCircle thumbnail src={image} />
                                <h1 className="name" >{`${this.state.author.firstName} ${this.state.author.lastName}`}</h1>
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
                        </Col>
                    </Row>
                </div>
            </Layout>
        );
    }
}