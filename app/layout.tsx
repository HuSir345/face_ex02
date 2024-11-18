import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '图片合成工具',
  description: '基于 Coze API 的图片合成应用',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
