export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-serif text-4xl font-bold mb-6">About</h3>
          <p className="text-gray-700 mb-4">International fashion designer specializing in couture, corsetry, and digital design.</p>
          <p className="text-gray-600 mb-8">Available for freelance work and positions in Canada and beyond.</p>
          <div>
            <p className="font-semibold mb-3">Specialties:</p>
            <ul className="text-gray-700 space-y-1">
              <li>Couture Dressmaking</li>
              <li>Corset Design</li>
              <li>Digital Patterns</li>
              <li>Sustainable Fashion</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-300 aspect-square"></div>
      </div>
    </section>
  )
}
