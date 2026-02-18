import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import DigitalPatterns from './components/DigitalPatterns'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { portfolioItems } from './data/portfolioData'

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Scroll to sections for all non-gallery links
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Router>
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Portfolio portfolio={portfolioItems} onSelectImage={setSelectedImage} />
              <Skills />
              <DigitalPatterns onSelectImage={setSelectedImage} />
              <Resume />
              <Contact />
              <Footer />
              <Modal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
            </>
          }
        />

        {/* Gallery page */}
        <Route
          path="/gallery"
          element={
            <>
              <Gallery onSelectImage={setSelectedImage} />
              <Footer />
              <Modal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
            </>
          }
        />
      </Routes>
    </Router>
  )
}
