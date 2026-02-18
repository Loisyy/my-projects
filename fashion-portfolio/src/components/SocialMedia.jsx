export default function SocialMedia() {
  const socials = [
    { name: 'Instagram', url: 'https://instagram.com', icon: '' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Pinterest', url: 'https://pinterest.com', icon: '📌' },
    { name: 'Facebook', url: 'https://instagram.com', icon: '📷' },
    { name: 'WhatsApp', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Youtube', url: 'https://pinterest.com', icon: '📌' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: '🎵' },
    { name: 'Email', url: 'mailto:hello@loisnyks.com', icon: '✉️' },
  ]

  return (
    <div className="bg-pink-50 border border-pink-200 rounded-lg p-8">
      <h3 className="font-semibold text-lg text-gray-900 mb-6">Connect With Me</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg hover:shadow-md hover:border-pink-400 border border-pink-200 transition-all"
          >
            <span className="text-2xl">{social.icon}</span>
            <span className="text-xs font-medium text-gray-700 text-center">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
