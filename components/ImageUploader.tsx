'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImagePreview, ProcessingStatus } from '@/types'
import ProgressBar from './ProgressBar'

interface Props {
  onProcess: (image1: File, image2: File) => Promise<void>
  status: ProcessingStatus
  onImageChange?: () => void
}

export default function ImageUploader({ onProcess, status, onImageChange }: Props) {
  const [previews, setPreviews] = useState<[ImagePreview?, ImagePreview?]>([])
  const [progress, setProgress] = useState(0)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('请上传图片文件')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const newPreviews = [...previews]
      newPreviews[index] = {
        url: e.target?.result as string,
        file
      }
      setPreviews(newPreviews as [ImagePreview?, ImagePreview?])
      
      onImageChange?.()
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async () => {
    if (!previews[0] || !previews[1]) {
      alert('请上传两张图片')
      return
    }

    // 重置进度
    setProgress(0)

    // 启动进度模拟
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(interval)
          return prev
        }
        // 进度增加速度随进度增加而减慢
        const increment = Math.max(1, (100 - prev) / 20)
        return Math.min(95, prev + increment)
      })
    }, 200)

    try {
      await onProcess(previews[0].file, previews[1].file)
      // 处理完成后，将进度设为100%
      setProgress(100)
    } catch (error) {
      clearInterval(interval)
      setProgress(0)
    }
  }

  const uploadTexts = [
    '上传一张脸图',
    '上传一张被替换的脸'
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[0, 1].map((index) => (
          <div key={index} className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, index as 0 | 1)}
              className="hidden"
              id={`image-input-${index}`}
            />
            <label
              htmlFor={`image-input-${index}`}
              className="block w-full aspect-square border-2 border-dashed rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
            >
              {previews[index] ? (
                <Image
                  src={previews[index]!.url}
                  alt={`预览图 ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-bold">{uploadTexts[index]}</span>
                </div>
              )}
            </label>
          </div>
        ))}
      </div>

      {status === 'processing' && <ProgressBar progress={progress} />}

      <button
        onClick={handleSubmit}
        disabled={status === 'processing' || !previews[0] || !previews[1]}
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
      >
        {status === 'processing' ? '处理中...' : '开始合成'}
      </button>
    </div>
  )
} 