import React from 'react';
import './author.css';
import { Image, Card } from 'react-bootstrap';
import image from '../../assets/img/authors/author3.png';

export default function Author(props) {

    return (
        <Card className="author">
            <Card.Body className="author-content" >
                <Image roundedCircle thumbnail src={image} />
                <div className="author-description" >
                    <h1 className="author-title" >Mac Donalds</h1>
                    <p className="author-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt.</p>
                </div>
            </Card.Body>
        </Card>
    );

} 