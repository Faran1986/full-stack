import "./App.css";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import PastProjetcs from "./components/PastProjects";
import Sidebar from "./components/Sidebar";
import { gsap, Power1 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);

function App() {
  const [data, setData] = useState([]);
  // Gsap ref
  const titleRef = useRef(null);
  const verticalRef = useRef(null);
  const aboutDescRef = useRef(null);
  const headingRef = useRef(null);
  const listingRef = useRef(null);

  // const listingAnim = () => {
  //   gsap.from(listingRef.current, {
  //     duration: 1,
  //     y: -100,
  //     autoAlpha: 0,
  //     ease: Power1.out,
  //     // delay: 0.5,
  //     scrollTrigger: {
  //       trigger: listingRef.current,
  //       markers: true,
  //       toggleActions: "restart none restart none",
  //       start: "top 60%",
  //       end: "top 0",
  //     },
  //   });
  // };

  // Function for getting data from backend
  const getData = async () => {
    const response = await axios.get(
      "https://faranshaw.com/wp-server/wp-json/wp/v2/pages/9"
    );
    const res = await response.data;
    setData(res);
  };

  // UseEffect
  useEffect(() => {
    getData();

    // Animation For Hero Title
    gsap.from(titleRef.current, {
      duration: 1,
      y: 170,
      autoAlpha: 0,
      ease: Power1.out,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".hero-content",
        toggleActions: "restart none restart none",
        start: "top 90%",
        end: "top 0",
      },
    });

    // Animation For Hero Vertical Text
    gsap.from(verticalRef.current, {
      duration: 0.8,
      y: -170,
      autoAlpha: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".hero-content",
        toggleActions: "restart none restart none",
        start: "top 80%",
        end: "top 0",
      },
    });

    // Animation For About Section

    // About Title Animatio
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        toggleActions: "restart none restart none",
        start: "0 85%",
        end: "top 0",
      },
      duration: 1,
      x: -300,
      autoAlpha: 0,
      ease: Power1.out,
    });

    // About Description Animation
    gsap.from(aboutDescRef.current, {
      duration: 1.5,
      y: -100,
      autoAlpha: 0,
      ease: Power1.out,
      // delay: 0.5,
      scrollTrigger: {
        trigger: "#about_desc",
        toggleActions: "restart none restart none",
        start: "top 80%",
        end: "top 0",
      },
    });
  }, []);
  return (
    <div className="App">
      {console.log(data)}
      <Sidebar sidebarData={data} />
      <Header />
      <Hero heroData={data} titleRef={titleRef} verticalRef={verticalRef} />
      <About
        aboutData={data}
        aboutTitleRef={headingRef}
        aboutDescRef={aboutDescRef}
        listingRef={listingRef}
      />
      <PastProjetcs projectsData={data.acf?.projects} />
      <Journey journeyData={data.acf?.journey} />
      <Footer footerData={data} />
    </div>
  );
}

export default App;
