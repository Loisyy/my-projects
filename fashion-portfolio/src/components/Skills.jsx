export default function Skills() {
  const skills = [
    { category: 'Sewing & Construction', items: ['Pattern Making', 'Hand Stitching', 'Machine Sewing', 'Garment Assembly', 'Seam Finishing'] },
    { category: 'Design & Technique', items: ['Corset Design', 'Draping', 'Couture Techniques', 'Pattern Construction', 'Beading'] },
    { category: 'Digital Tools', items: ['Adobe Illustrator', 'Photoshop', 'Blender', 'CAD Pattern Making'] },
    { category: 'Business', items: ['Client Relations', 'Project Management', 'Cost Estimation', 'Quality Control', 'Freelancing'] },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">Skills & Expertise</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">A comprehensive skill set spanning traditional couture techniques and cutting-edge digital design tools</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 border border-pink-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg text-pink-600 mb-6">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
