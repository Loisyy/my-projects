export default function Modal({ selectedImage, onClose }) {
  if (!selectedImage) return null

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 overflow-auto">
      <div onClick={e => e.stopPropagation()} className="relative max-w-3xl w-full my-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
        >
          ✕
        </button>
        <img 
          src={selectedImage.image} 
          alt={selectedImage.title} 
          className="w-full h-auto rounded-lg shadow-2xl" 
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="%23999" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E'
          }}
        />
        <div className="mt-4 text-white">
          <h3 className="text-xl font-semibold text-center">{selectedImage.title}</h3>
        </div>
      </div>
    </div>
  )
}
