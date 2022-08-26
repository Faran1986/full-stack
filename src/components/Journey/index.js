import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="left-arrow arrow" onClick={onClick}>
      <img
        alt="left"
        src="assets/images/arrow-left.png"
        className="nav-arrow nav-left"
      ></img>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="right-arrow arrow" onClick={onClick}>
      <img
        alt="right"
        src="assets/images/arrow-right.png"
        className="nav-arrow nav-right"
      ></img>
    </div>
  );
}

const Journey = (props) => {
  const data = props.journeyData;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="journey" id="journey">
      <div className="container">
        <Slider {...settings} className="journey-slider">
          {data?.map((journey, index) => {
            return (
              <div className="item" key={index}>
                <div className="row align-items-center">
                  <div className="col-md-5 pr-md-5">
                    <div className="journey-image">
                      <img
                        className="img-fluid"
                        src={journey.journey_image.url}
                        alt={journey.journey_image.alt}
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="slider-content">
                      <h3
                        className="mb-4 pb-2 animation_title"
                        ref={props.sectionRef}
                      >
                        MY JOURNEY SO FAR.
                      </h3>
                      <div className="journey-date d-flex justify-space-between mb-4">
                        <span className="place">{journey.journey_name}</span>
                        <span className="ml-auto date">
                          {journey.journey_date}
                        </span>
                      </div>
                      <p>{journey.journey_description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Journey;
