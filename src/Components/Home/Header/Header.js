import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
// import slider1 from "../../../Images/slider/slider-2 (2).jpg.jpg";
// import slider2 from "../../../Images/slider/slider-2.jpg";
import slider3 from "../../../Images/slider/slider-3.jpg";
import slider2 from "../../../Images/slider/slider-4.jpg";
import slider4 from "../../../Images/slider/slider-2 (2).jpg";

const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={slider4} alt="First slide" />
          <Carousel.Caption className=" fw-bold bg-success p-2 text-dark bg-opacity-25 rounded-3">
            <h3>Our Hospital</h3>
            <h6>Keep your is good , Come to our Hopital</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Second slide" />

          <Carousel.Caption className=" fw-bold bg-success p-2 text-dark bg-opacity-25 rounded-3">
            <h3>Our Doctor Team</h3>
            <h6>Keep your is good , Come to our Hopital</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Third slide" />

          <Carousel.Caption className=" fw-bold bg-success p-2 text-dark bg-opacity-25 rounded-3">
            <h3>Good Health Good Heard</h3>
            <h6>Keep your is good , Come to our Hopital</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
