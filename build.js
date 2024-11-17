const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// 增加 Node.js 内存限制
process.env.NODE_OPTIONS = '--max-old-space-size=4096'

try {
  // 清理之前的构建
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true })
  }

  // 执行构建
  execSync('next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: '1'
    }
  })

  // 创建 .vercel/output 目录
  const outputDir = path.join('.vercel', 'output')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // 复制构建文件
  fs.cpSync('.next', path.join(outputDir, 'static'), { recursive: true })

} catch (error) {
  console.error('Build failed:', error)
  process.exit(1)
} 