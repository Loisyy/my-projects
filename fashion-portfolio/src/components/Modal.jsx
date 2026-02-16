export default function Modal({ selectedImage, onClose }) {
  if (!selectedImage) return null

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div onClick={e => e.stopPropagation()} className="max-w-4xl w-full">
        <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto" />
        <p className="text-white text-center mt-4">{selectedImage.title}</p>
      </div>
    </div>
  )
}
