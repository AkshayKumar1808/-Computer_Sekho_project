import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageUrl } from '../Utils';
import '../../css/Carousel.css'; // Import the CSS file


export default function Carousel(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <div>
          <Slider {...settings}>
            <div>
              <img className="carousel-image" src={getImageUrl('home/cloud-coding.jpg')} alt="Slide 1" />
            </div>
            <div>
              <img className="carousel-image" src="https://via.placeholder.com/800x300?text=Slide+2" alt="Slide 2" />
            </div>
            <div>
              <img className="carousel-image" src="https://via.placeholder.com/800x300?text=Slide+3" alt="Slide 3" />
            </div>
          </Slider>
        </div>
    );
};