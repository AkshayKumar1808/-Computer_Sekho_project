import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageUrl } from '../Utils';
import '../components/css/Carousel.css'; // Import the CSS file


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
              <img className="carousel-image" src={getImageUrl('sliders/cloud-coding.jpg')} alt="Slide 1" />
            </div>
            <div>
              <img className="carousel-image" src={getImageUrl('sliders/main1.png')} alt="Slide 2" />
            </div>
          </Slider>
        </div>
    );
};