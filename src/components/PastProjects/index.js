import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

const PastProjetcs = (props) => {
  const [data, setData] = useState([]);
  const headingRef = useRef(null);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    setData(props.projectsData);
    gsap.fromTo(
      headingRef.current,
      {
        x: -300,
      },
      {
        duration: 1,
        x: 0,
        ease: Power1.out,
        scrollTrigger: {
          trigger: headingRef.current,
          toggleActions: "restart none restart none",
          start: "0 85%",
          end: "top 0",
        },
      }
    );
  }, [props]);
  return (
    <section className="past-project-outer">
      <section className="past-projects" id="projects">
        <div className="past-projects-container">
          <div className="fullstack-transparent-img">
            <img
              src="assets/images/fullstack-text.png"
              className="img-fluid"
              alt="Full Stack"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="animation_title" ref={headingRef}>
                MY PAST PROJECTS.
              </h2>
            </div>
          </div>
          <Slider {...settings} className="projects-slider">
            {data?.map((project, index) => {
              return (
                <div className="item" key={index}>
                  <div className="row align-items-end">
                    <div className="col-lg-5 order-1 order-lg-0">
                      <div className="slider-content" ref={sliderRef}>
                        <div id="counter">01</div>
                        <h4>{project.project_name}</h4>
                        <p className="skills">
                          {project.project_skills?.map((skill, index) => {
                            return (
                              <span key={index}>{`${skill.skill_name}. `}</span>
                            );
                          })}
                        </p>
                        <p>{project.project_description}</p>
                      </div>
                    </div>
                    <div className="col-lg-7 order-0 order-lg-1">
                      <img
                        className="img-fluid"
                        src={project.project_image.url}
                        alt={project.project_image.alt}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="owl-carousel owl-theme projects-slider"></div>
        </div>
      </section>
    </section>
  );
};

export default PastProjetcs;
