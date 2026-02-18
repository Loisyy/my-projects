export default function Portfolio({ portfolio, onSelectImage }) {
  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">Featured Portfolio</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">A collection of my finest couture creations showcasing precision, innovation, and artistic vision</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map(item => (
            <div key={item.id} onClick={() => onSelectImage(item)} className="relative bg-gray-100 aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all border-2 border-pink-200 hover:border-pink-600 group">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-center px-4">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
