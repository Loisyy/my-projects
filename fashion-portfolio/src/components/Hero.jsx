import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section id="hero" className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-6xl md:text-7xl font-bold mb-4 text-gray-900">Loisnyks Design</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Fashion designer specializing in classic and haute Couture trendy outfits and innovative digital pattern design
        </p>
        <button
          onClick={() => navigate('/gallery')}
          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
        >
          View My Work
        </button>
      </div>
    </section>
  )
}
