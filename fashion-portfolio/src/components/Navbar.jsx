import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/LD-logo-dark.jpg'


export default function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleClick = (item) => {
    if (item === 'gallery') {
      navigate('/gallery') // navigate to Gallery page
    } else {
      scrollToSection(item) // scroll for other sections
    }
    setIsMenuOpen(false)
  }

  const menuItems = ['about', 'portfolio', 'skills', 'patterns', 'contact', 'gallery']

  return (
    <nav className="fixed w-full bg-white border-b border-pink-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <img src={logo} alt="Loisnyks Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-gray-900">Loisnyks</h1>
            <p
              className="text-xs text-pink-600 font-semibold -mt-1 italic"
              style={{ transform: 'skewX(-15deg)' }}
            >
              Designing a sustainable future
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="text-gray-700 hover:text-pink-600 transition-colors capitalize text-sm font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-xl font-bold text-gray-900"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-200">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="block w-full text-left px-6 py-3 hover:bg-pink-50 capitalize text-gray-700 hover:text-pink-600 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
