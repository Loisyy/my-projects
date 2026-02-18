import profile from '../assets/images/profileImage.jpg'

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-12 h-1 bg-pink-600 mb-8"></div>
          <p className="text-gray-700 mb-4 leading-relaxed">My name is Lois Nkeiru I'm fashion designer with over 5 years of experience creating stunning couture pieces and basic digital designs. I bring precision and details to my work, priotizing sustainable fashion practices.</p>
          <p className="text-gray-700 mb-8 leading-relaxed">Currently available for freelance projects and full-time positions globally. I'm passionate about pushing the boundaries of traditional fashion with cutting-edge digital tools.</p>
          <div>
            <p className="font-semibold text-gray-900 mb-4">Core Specialties:</p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center gap-2"><span className="text-pink-600 font-bold">•</span> Couture Dressmaking</li>
              <li className="flex items-center gap-2"><span className="text-pink-600 font-bold">•</span> Corset  Design</li>
              <li className="flex items-center gap-2"><span className="text-pink-600 font-bold">•</span> Digital Pattern Making</li>
              <li className="flex items-center gap-2"><span className="text-pink-600 font-bold">•</span> Sustainable Fashion</li>
            </ul>
          </div>
        </div>
       <img src={profile} alt="profile image"  className="aspect-square rounded-lg shadow-lg object-cover"/>
      </div>
    </section>
  )
}
