import Image from 'next/image'

interface Props {
  imageUrl: string
}

export default function ResultDisplay({ imageUrl }: Props) {
  const handleDownload = () => {
    window.open(imageUrl, '_blank')
  }

  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-2xl text-center" style={{ 
        fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', sans-serif",
        background: "linear-gradient(45deg, #FF69B4, #FF1493)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        fontWeight: "bold"
      }}>
        换脸后都说好 ✨
      </h2>
      
      <div className="relative aspect-square w-full max-w-2xl mx-auto">
        <Image
          src={imageUrl}
          alt="合成结果"
          fill
          className="object-contain"
        />
      </div>

      <button
        onClick={handleDownload}
        className="block w-full max-w-md mx-auto py-3 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        下载图片
      </button>
    </div>
  )
} 