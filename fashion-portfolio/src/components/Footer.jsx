export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-pink-900 text-gray-300 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
          <div>
            <h4 className="font-semibold text-white mb-4">Loisnyks Design</h4>
            <p className="text-sm">Crafting elegant fashion with innovation and precision</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#portfolio" className="hover:text-pink-400 transition-colors">Portfolio</a></li>
              <li><a href="#skills" className="hover:text-pink-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Location</h4>
            <p className="text-sm">Toronto, Canada<br />Available Globally</p>
          </div>
        </div>
        <div className="text-center text-sm">
          <p>&copy; 2024 Loisnyks Design. All rights reserved. | Crafted with passion & precision ✨</p>
        </div>
      </div>
    </footer>
  )
}
