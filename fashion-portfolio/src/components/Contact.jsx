import SocialMedia from './SocialMedia'

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-pink-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">I'd love to hear about your project and discuss how I can help bring your vision to life</p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a href="mailto:hello@loisnyks.com" className="text-pink-600 hover:text-pink-700 font-medium">loisnyksdesign@yahoo.com</a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone</p>
                <a href="tel:+16475551234" className="text-pink-600 hover:text-pink-700 font-medium">+234 7084350700</a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Location</p>
                <p className="text-gray-900 font-medium">Abuaj, Nigeria</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Availability</p>
                <p className="text-gray-900 font-medium">Open for Freelance & Full-time and full time work within and globally</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-pink-200 px-4 py-3 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 placeholder-gray-500" />
            <input type="email" placeholder="Your Email" className="w-full border border-pink-200 px-4 py-3 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 placeholder-gray-500" />
            <textarea placeholder="Your Message" rows={4} className="w-full border border-pink-200 px-4 py-3 rounded-lg focus:outline-none focus:border-pink-600 text-gray-900 placeholder-gray-500 resize-none" />
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition-colors font-semibold">Send Message</button>
          </form>
        </div>

        <SocialMedia />
      </div>
    </section>
  )
}
