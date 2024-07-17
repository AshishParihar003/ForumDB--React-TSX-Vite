import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Pages/MainComponets/Header";
import { Footer } from "./Pages/MainComponets/Footer";
import AboutUs from "./Pages/Additional_Components/AboutUS/About_US";
import { WhyUs } from "./Pages/Components/Why_us";
import ImageCarousel from "./Pages/Components/Start_Images";
import Course_Container from "./Pages/Components/Course";
import MyCertificate from "./Pages/Components/Certificate";
import Video from "./Pages/Components/Video";
import Logo_Marquee from "./Pages/Additional_Components/Logo_Marquee/Logo_Marquee";
import CustomMarquee from "./Pages/Additional_Components/Marquee/Marquee";
import Mentors from "./Pages/Components/Mentors";

const MyComponent = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />

        <ImageCarousel />

        <CustomMarquee />
        <WhyUs />
        <Logo_Marquee />
        <Course_Container />
        <MyCertificate />
        <Mentors/>
        <AboutUs />
        
        <Video />
        <Footer />
      </div>
    </Router>
  );
};

export default MyComponent;
