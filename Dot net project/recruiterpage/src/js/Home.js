import React, { useState } from 'react';
import Carousel from './components/carsousel';
import PostCard from './components/PostCard';
import Footer from './components/Footer';
import { Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/PostCard.css'; 
import '../css/Home.css'; 
import Crawling from './Crawling';

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const postCards = [
    { title: 'PGDBDA', text: 'PG DBDA Post Graduate Diploma in Big Data Analytics (PG DBDA) enables students to explore the fundamental concepts of big data analytics.', link: '/pg-dbda' },
    { title: 'PGDAC', text: 'Post Graduate Diploma in Advanced Computing (PG DAC) grooms engineers and IT professionals for a career in Software Development.', link: '/pg-dac' },
    { title: 'MSCIT', text: 'The admission to all PG Courses by C-DAC ACTS is through an All-India C-DAC Common Admission Test (C-CAT)', link: '/mscit' },
    { title: 'FANTASIA', text: 'Post Graduate Diploma in Advanced Computing (PG DAC) grooms engineers and IT professionals for a career in Software Development.', link: '/fantasia' },
  ];

  return (
    <div className="home-container">
    
      <Carousel />
      <br/>
            <hr/>
            <br/>
            <br/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1 className="display-4">We Offer</h1>
          </div>
          {postCards.slice(0, showAll ? postCards.length : 2).map((post, index) => (
            <div key={index} className="col-md-6 mb-4">
              <PostCard title={post.title} text={post.text} link={post.link} />
            </div>
          ))}
          {!showAll && (
            <div className="showallbtn">
            <Button 
              variant="secondary" 
              onClick={() => setShowAll(true)} 
              className="styled-button"
            >
              More
            </Button>
          </div>
          
          )}
          <div className="col-12 text-center mt-4">
            <br/>
            <hr/>
            <br/>
            <br/>
            {/* <div style={{backgroundColor:'grey'}}>
            <h1 className="display-4">About Us</h1>
            <h2 className="mt-4">We Believe</h2>
            <p className="lead">To learn and work successfully in an increasingly information-rich society, one must be able to use technology effectively and creatively. This applies to all strata of society...students, teachers, professionals, homemakers, and senior citizens.</p>
           
            <br/>   <br/>
            <h2 className="mt-4">Our Mission</h2>

            <p className="lead">To develop capable users of Information Technology who will effectively and creatively use the most amazing machine, a PC!</p>
          </div> */}
          <div style={{ 
//backgroundImage: 'linear-gradient(to right, #d3cce3, #e9e4f0)'
backgroundImage: 'linear-gradient(to right, #ff9a9e, #fecfef)'

, 
  padding: '40px', 
  borderRadius: '15px', 
  boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
  color: '#333',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center'
}}>
  <h1 style={{ 
    fontSize: '2.5rem', 
    fontWeight: 'bold', 
    color: '#343a40', 
    marginBottom: '20px' 
  }}>
    About Us
  </h1>
  
  <h2 style={{ 
    fontSize: '2rem', 
    color: '#495057', 
    marginTop: '30px', 
    marginBottom: '10px' 
  }}>
    We Believe
  </h2>
  
  <p style={{ 
    fontSize: '1.2rem', 
    lineHeight: '1.6', 
    maxWidth: '800px', 
    margin: 'auto', 
    color: '#606770'
  }}>
    To learn and work successfully in an increasingly information-rich society, one must be able to use technology effectively and creatively. This applies to all strata of society...students, teachers, professionals, homemakers, and senior citizens.
  </p>

  <br /><br />
  
  <h2 style={{ 
    fontSize: '2rem', 
    color: '#495057', 
    marginTop: '30px', 
    marginBottom: '10px' 
  }}>
    Our Mission
  </h2>
  
  <p style={{ 
    fontSize: '1.2rem', 
    lineHeight: '1.6', 
    maxWidth: '800px', 
    margin: 'auto', 
    color: '#606770'
  }}>
    To develop capable users of Information Technology who will effectively and creatively use the most amazing machine, a PC!
  </p>
</div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}










