import React, { useEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";
const About = (props) => {
  const listingRef = useRef(null);
  const data = props.aboutData;
  const listingAnim = () => {
    console.log(listingRef);
    gsap.from(`.${listingRef?.current?.className}`, {
      duration: 0.7,
      x: -260,
      autoAlpha: 0,
      ease: Power1.out,
      stagger: 0.1,
      // delay: 0.5,
      scrollTrigger: {
        trigger: `.${listingRef?.current?.className}`,
        toggleActions: "restart none restart none",
        start: "top 90%",
        end: "top 0",
      },
    });
  };
  useEffect(() => {
    setTimeout(() => {
      listingAnim();
    }, 1000);
  }, []);
  return (
    <section className="about" id="about">
      <img
        src="assets/images/syed-akhter.png"
        className="img-fluid fullstack-img"
        alt="Syed Akhter"
      />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="animation_title" ref={props.aboutTitleRef}>
              {data?.acf?.about_heading}
            </h2>
            <p id="about_desc" ref={props.aboutDescRef}>
              {data?.acf?.about_descrition}
            </p>

            <div id="accordion">
              {data?.acf?.about_categories.map((category, index) => {
                return (
                  <div className="card" key={index}>
                    <div className="card-header">
                      <h5 className="mb-0" ref={props.aboutTitleRef}>
                        <span className="animation_title">
                          {category.about_category_name}
                        </span>
                        <button
                          className={`btn btn-link ${
                            category.collapsed === true ? "" : "collapsed"
                          }`}
                          data-toggle="collapse"
                          data-target={`#${category.about_category_name}`}
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        ></button>
                      </h5>
                    </div>

                    <div
                      id={category.about_category_name}
                      className={`collapse ${
                        category.show === true ? "show" : ""
                      }`}
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body pb-0 pt-4">
                        <ul className="skill-list">
                          {category?.about_sub_category.map((skill, index) => {
                            return (
                              <li
                                className="listItem"
                                key={index}
                                ref={listingRef}
                              >
                                {skill.about_sub_category_name}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
