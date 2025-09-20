import React from 'react';
import Hero from './sections/Hero';
import FeatureCards from './sections/FeatureCards';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';
import NavBar from './components/NavBar';
import ShowcaseSection from './sections/ShowcaseSection';
import LogoSection from './components/LogoSection';
import Contact from './sections/Contact';

const App = () => {
  return (
    // <div>App</div>
    <>
    <Hero />
    <NavBar/>
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards/>
    <Experience/>
    <TechStack/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App