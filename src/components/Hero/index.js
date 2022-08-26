import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Hero = (props) => {
  const data = props.heroData;

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-wrapper position-relative">
          <div className="hero-content">
            <span className="hero-vertical-text" ref={props.verticalRef}>
              {/* {data?.acf?.banner_sub_heading} */}
              fasdf kfasdkfn ikfjsdaknf asdfasd
            </span>
            <h1 className="hero-title animation_title" ref={props.titleRef}>
              {/* {data?.acf?.banner_heading} */}
              Full Stack Developer
            </h1>
          </div>
          <svg
            className="title-circle"
            version="1.1"
            id="circle"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
          >
            <circle
              fill="none"
              stroke="#f7971b"
              strokeWidth="25"
              stroke-mitterlimit="0"
              cx="50"
              cy="50"
              r="50"
              strokeDasharray="360"
              strokeLinecap="square"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="360;0"
                from="1"
                to="0"
                dur="1.5s"
                begin="0s;op.end+3s"
              ></animate>
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
