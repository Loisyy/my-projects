export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
          Resume / CV
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Download my professional resume for detailed information about my
          experience and qualifications.
        </p>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-12 text-center border border-pink-300">
          <div className="text-5xl mb-6">📄</div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Loisnyks Design Resume
          </h3>

          <p className="text-gray-700 mb-8">
            Complete professional history, education, certifications, and
            detailed work experience.
          </p>

          <a
            href="/CV/Fashion-Resume_CV.docx.pdf"
            download
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
