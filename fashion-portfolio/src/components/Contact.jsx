export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-serif text-4xl font-bold mb-12 text-center">Contact</h3>
        <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          <div>
            <p className="text-gray-300 mb-6">Let's work together on your next project.</p>
            <div className="space-y-3">
              <p><a href="mailto:hello@loisnyks.com" className="hover:text-gray-300">hello@loisnyks.com</a></p>
              <p><a href="tel:+16475551234" className="hover:text-gray-300">+1 (647) 555-1234</a></p>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full bg-gray-900 border border-gray-700 px-4 py-2 text-white placeholder-gray-500" />
            <input type="email" placeholder="Email" className="w-full bg-gray-900 border border-gray-700 px-4 py-2 text-white placeholder-gray-500" />
            <textarea placeholder="Message" rows={4} className="w-full bg-gray-900 border border-gray-700 px-4 py-2 text-white placeholder-gray-500 resize-none" />
            <button className="w-full bg-white text-black py-2 hover:bg-gray-200 transition-colors font-semibold">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
