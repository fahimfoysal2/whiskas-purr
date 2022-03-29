import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import "./hero.scss";
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero-main-area-wrap">
      <div className="hero-inner-wrap">
        <Container>
          <Slider {...settings}>
            <div>
              <h3>Purr More Banner Placeholder</h3>
            </div>
            <div>
              <h3>Purr More Banner Placeholder</h3>
            </div>
            <div>
              <h3>Purr More Banner Placeholder</h3>
            </div>
            <div>
              <h3>Purr More Banner Placeholder</h3>
            </div>
            <div>
              <h3>Purr More Banner Placeholder</h3>
            </div>
            <div>
              <h3>Purr More Banner Placeholder</h3>
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
