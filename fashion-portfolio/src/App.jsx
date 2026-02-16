import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  const portfolio = [
    { id: 1, title: 'Evening Gown', image: 'https://images.unsplash.com/photo-1595777712802-91d67cf7bfff?w=500&h=500&fit=crop' },
    { id: 2, title: 'Corset Design', image: 'https://images.unsplash.com/photo-1595632816409-9e16f3d8a0f8?w=500&h=500&fit=crop' },
    { id: 3, title: 'Pattern Study', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop' },
    { id: 4, title: 'Couture Dress', image: 'https://images.unsplash.com/photo-1609929212165-157f1e736b9d?w=500&h=500&fit=crop' },
    { id: 5, title: 'Structured Corset', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop' },
    { id: 6, title: 'Textile Design', image: 'https://images.unsplash.com/photo-1535016120754-fd45532bb070?w=500&h=500&fit=crop' },
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Portfolio portfolio={portfolio} onSelectImage={setSelectedImage} />
      <Contact />
      <Footer />
      <Modal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  )
}
