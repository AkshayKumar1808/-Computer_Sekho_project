import React from 'react';
import { Card } from 'react-bootstrap';
import './css/PostCard.css'; // Import your custom CSS

const PostCard = ({ image, title, text }) => {
    return (
        <Card className="post-card">
            <div className="post-card-image">
                <Card.Img variant="top" src={image} />
            </div>
            <Card.Body className="post-card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PostCard;
