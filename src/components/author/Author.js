import React from 'react';
import './author.css';
import { Image, Card,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Author(props) {

    return (
        <Card className="author">
            <Card.Body className="author-content" >
                <Image roundedCircle thumbnail src={props.image} />
                <div className="author-description" >
                    <h1 className="author-title" >{props.name}</h1>
                    <p className="author-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt.</p>
                </div>
                <Link to={props.link} >
                    <Button variant="outline-info">More info</Button>
                </Link>
            </Card.Body>
        </Card>
    );

} 