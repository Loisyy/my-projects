import { useState } from 'react'

export default function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (id) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-serif text-2xl font-bold">Loisnyks</h1>
        
        <div className="hidden md:flex gap-8">
          {['about', 'portfolio', 'contact'].map(item => (
            <button key={item} onClick={() => handleScroll(item)} className="hover:opacity-60 transition-opacity capitalize">
              {item}
            </button>
          ))}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-xl font-bold">
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {['about', 'portfolio', 'contact'].map(item => (
            <button key={item} onClick={() => handleScroll(item)} className="block w-full text-left px-6 py-2 hover:bg-gray-50 capitalize">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
