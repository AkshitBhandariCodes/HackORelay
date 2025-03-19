'use client'
import React from "react";
import { Button, buttonVariants } from "./components/ui/button";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import Sponsor from "./components/ui/Sponser";
import About from "./components/ui/About";
import Theme from "./components/ui/Theme";
import Prize from "./components/ui/Prize";
import Gallery from "./components/ui/Gallery";
import FAQ from "./components/ui/Faq";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <div className="m-10 p-10">
        <Navbar/>
        <Hero/>
        <Sponsor/>
        <About/>
        <Theme/>
        <Prize/>
        <Gallery/>
        <FAQ/>
        <Footer/>
    </div>
  );
};

export default App;