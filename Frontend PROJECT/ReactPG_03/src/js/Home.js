import React from 'react';
import Header from './components/Header';
import Carousel from './components/carsousel';
import PostCard from './components/PostCard';
import Footer from './components/Footer'; // Import the Footer component
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/PostCard.css'; // Import your custom CSS for PostCard

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <PostCard
              image="https://via.placeholder.com/400x300"
              title="Sample Title"
              text="This is some sample text for the post card. It describes the content of the card."
            />
          </div>
          <div className="col-md-6">
            <PostCard
              image="https://via.placeholder.com/400x300"
              title="Another Title"
              text="Here is some more text for another post card. You can customize this as needed."
            />
          </div>
          <div>
            <h1>about us</h1>
            <p>lorem</p>
          </div>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}
