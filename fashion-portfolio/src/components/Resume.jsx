export default function Resume() {
  const handleDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/assets/Loisnyks_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Loisnyks_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
          Resume
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Download my professional resume for more detailed information about my
          experience and qualifications
        </p>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-12 text-center border border-pink-300">
          <div className="text-5xl mb-6">📄</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Loisnyks Design Resume
          </h3>
          <p className="text-gray-700 mb-8">
            Complete professional history, education, certifications, and
            detailed work experience
          </p>

          <a
            href="/resume.pdf"
            download
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Education & Experience Overview */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-lg text-pink-600 mb-4">
              Education
            </h3>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">
                  M.Ed. Educational Psychology
                </p>
                <p className="text-sm text-gray-600">
                  University of Abuja | 2018 – 2023
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  B.Sc. (Ed.) Counseling Psychology (Second Class Upper)
                </p>
                <p className="text-sm text-gray-600">
                  University of Port Harcourt | 2006 – 2010
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Professional Fashion Training & Certifications
                </p>
                <p className="text-sm text-gray-600">
                  Dressmaking Academy (Pattern & Corset) – 2023 <br />
                  ABSL Fashion Institute – 2020 <br />
                  Fashion Six Academy (Business of Fashion) – 2021
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-lg text-pink-600 mb-4">
              Experience
            </h3>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">
                  Founder & Lead Designer – Loisnyks Design
                </p>
                <p className="text-sm text-gray-600">
                  Abuja, Nigeria | 2019 – Present <br />
                  Bespoke fashion, corsetry, sustainable collections, pattern
                  drafting & full garment production.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Pattern Tutor – Legs Apparel
                </p>
                <p className="text-sm text-gray-600">
                  2022 | Taught flat pattern drafting & structured garments.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Dressmaker – Teni Fashion
                </p>
                <p className="text-sm text-gray-600">
                  2022 | Custom garment construction & finishing.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Award Recognition</p>
                <p className="text-sm text-gray-600">
                  Development Bank of Nigeria Grant Award Winner – 2022
                  (Sustainable & Green Fashion Practices)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
