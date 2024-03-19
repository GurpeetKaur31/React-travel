import React from "react";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/Header";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Recommendation from "./Components/DestinationSection";
import Classes from "./Styles/Footer.module.css";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className={Classes.app}>
      <ScrollToTop />
      <NavBar />
      <Hero />
      <Service />
      <Recommendation />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;