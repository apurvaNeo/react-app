import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

//pages
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import ReviewPage from './pages/Review';
import WorkPage from './pages/Work';

//componants
import Banner from './components/banner/Banner';
import Header from './layout/header/Header';
import Services from './components/service/Services';
import AboutUs from './components/about/About';
import WorkWithUs from './components/work/WorkwithUs';
import Projects from './components/project/Projects';
import Footer from "./layout/footer/Footer";
import "./styles/main.scss";

function App() {
  return (
    <>
      {/* Header should be ONCE */}
      
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="Top_section">
                <Header />
                <Banner />
              </div>
              <Services />
              <AboutUs />
              <Projects />
              <WorkWithUs />
              <Footer/>
            </>
          }
        />

        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
