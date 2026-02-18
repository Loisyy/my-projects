import { digitalPatterns } from '../data/portfolioData'

export default function DigitalPatterns({ onSelectImage }) {

  return (
    <section id="patterns" className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">Digital Pattern Works</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Explore my collection of digital pattern designs and technical fashion illustrations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {digitalPatterns.map(pattern => (
            <div
              key={pattern.id}
              onClick={() => onSelectImage(pattern)}
              className="bg-gray-100 aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-shadow hover:border-pink-400 border-2 border-transparent"
            >
              <img src={pattern.image} alt={pattern.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want custom digital patterns for your designs?</p>
          <a
  href="mailto:loisnyksdesign@yahoo.com?subject=Request Custom Pattern"
  className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors inline-block"
>
  Request Custom Pattern
</a>

        </div>
      </div>
    </section>
  )
}
