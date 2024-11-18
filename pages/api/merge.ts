import type { NextApiRequest, NextApiResponse } from 'next'
import sharp from 'sharp'
import formidable from 'formidable'
import { createReadStream } from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const form = formidable({})
    const [fields, files] = await form.parse(req)
    const image1 = files.image1?.[0]
    const image2 = files.image2?.[0]

    if (!image1 || !image2) {
      return res.status(400).json({ error: '请提供两张图片' })
    }

    // 处理图片上传和合成的逻辑...
    // 这里保持原来的逻辑不变，只是改变了接口的处理方式

    res.status(200).json({ resultUrl: 'your-result-url' })
  } catch (error: any) {
    console.error('API Error:', error)
    res.status(500).json({ error: error.message || '处理失败' })
  }
} 