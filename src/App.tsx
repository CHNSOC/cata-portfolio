import Navbar from "@/scenes/navbar";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/scenes/home";

// For CSS testing

import Skills from "@/scenes/skills/skills";
import Playfield from "@/scenes/playfield";
import ErrorPage from "@/scenes/utility/ErrorPage";
import AboutMe from "@/scenes/aboutme";
import Footer from "@/scenes/footer/Footer";
import Experiences from "./scenes/experiences";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app bg-gray-100">
            <Navbar isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
            <Home setSelectedPage={setSelectedPage} />
            <Experiences setSelectedPage={setSelectedPage} />
            <Skills setSelectedPage={setSelectedPage} />
            <AboutMe setSelectedPage={setSelectedPage} />
            <Footer/>
          </div>
        } />
        <Route path="/playfield" element={<Playfield />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
  )
}

export default App
