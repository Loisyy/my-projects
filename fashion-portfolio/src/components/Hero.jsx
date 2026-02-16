export default function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-6xl md:text-7xl font-bold mb-6">Loisnyks Design</h2>
        <p className="text-lg text-gray-600 mb-8">Fashion designer exploring innovation and craftsmanship</p>
        <button onClick={() => scrollToSection('portfolio')} className="bg-black text-white px-8 py-3 hover:opacity-80 transition-opacity">
          View Work
        </button>
      </div>
    </section>
  )
}
