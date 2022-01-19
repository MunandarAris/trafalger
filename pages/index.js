import React from "react";

// Component
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Service from "../components/Service";
import AboutOne from "../components/AboutOne";
import AboutTwo from "../components/AboutTwo";
import Testimonial from "../components/Testimonials";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <AboutOne />
      <AboutTwo />
      <Testimonial />
      <Articles />
      <Footer />
    </>
  );
}
