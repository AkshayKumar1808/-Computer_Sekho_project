import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './css/PostCard.css'; 
import { useNavigate } from 'react-router-dom';

const PostCard = ({ title, text, link }) => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(`/course/${title}`);
  };

  return (
    <Card className="post-card">
      <Card.Body className="post-card-body">
        <Card.Title className="post-card-title">{title}</Card.Title>
        <Card.Text className="post-card-text">{text}</Card.Text>
        <Button className="post-card-button" onClick={navigateToPage}>Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;




















// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import './css/PostCard.css'; // Import your custom CSS
// import { useNavigate } from 'react-router-dom';

// const PostCard = ({ title, text, link }) => {
//   const navigate = useNavigate();

//   const navigateToPage = () => {
//     navigate(link);
//   };

//   return (
//     <Card className="post-card">
//       <Card.Body className="post-card-body">
//         <Card.Title className="post-card-title">{title}</Card.Title>
//         <Card.Text className="post-card-text">{text}</Card.Text>
//         <Button variant="primary" onClick={navigateToPage}>Learn More</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default PostCard;













