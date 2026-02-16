export default function Portfolio({ portfolio, onSelectImage }) {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-serif text-4xl font-bold mb-12 text-center">Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map(item => (
            <div key={item.id} onClick={() => onSelectImage(item)} className="bg-gray-100 aspect-square overflow-hidden cursor-pointer hover:opacity-70 transition-opacity">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
