'use client'
import React from "react";
import { Button, buttonVariants } from "./components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sponsor from "@/components/sponser";
import About from "@/components/Sponser";
import Theme from "@/components/Theme";
import Prize from "@/components/Prize";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div>
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