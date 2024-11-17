'use client'

import { useState } from 'react'
import ImageUploader from '@/components/ImageUploader'
import ResultDisplay from '@/components/ResultDisplay'
import { ProcessingStatus } from '@/types'

export default function Home() {
  const [status, setStatus] = useState<ProcessingStatus>('idle')
  const [resultImage, setResultImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageChange = () => {
    setResultImage(null)
    setError(null)
    setStatus('idle')
  }

  const handleProcess = async (image1: File, image2: File) => {
    try {
      setStatus('processing')
      setError(null)
      
      const formData = new FormData()
      formData.append('image1', image1)
      formData.append('image2', image2)

      const response = await fetch('/api/merge', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '处理失败')
      }

      setResultImage(data.resultUrl)
      setStatus('success')
    } catch (error: any) {
      console.error('处理错误:', error)
      setError(error.message || '处理失败')
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          一起玩
          <span className="inline-block px-2 py-1 mx-1 bg-blue-600 text-white rounded-lg transform hover:scale-105 transition-transform">
            换脸
          </span>
        </h1>
        
        <ImageUploader 
          onProcess={handleProcess} 
          status={status}
          onImageChange={handleImageChange}
        />
        
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {resultImage && (
          <ResultDisplay imageUrl={resultImage} />
        )}
      </div>
    </main>
  )
} 