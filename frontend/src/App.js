import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import SafetyCharter from "./components/SafetyCharter";
import ChannelDirectory from "./components/ChannelDirectory";
import CreatorHub from "./components/CreatorHub";
import FounderLetter from "./components/FounderLetter";
import Roadmap from "./components/Roadmap";
import Roles from "./components/Roles";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Mission />
      <SafetyCharter />
      <ChannelDirectory />
      <CreatorHub />
      <FounderLetter />
      <Roadmap />
      <Roles />
      <FAQ />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}