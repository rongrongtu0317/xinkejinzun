import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 静态导出：生成纯 HTML/CSS/JS 到 out/ 目录
  // 部署到 Hostinger 后无需 Node 服务，消除"首次访问加载失败"的冷启动问题
  output: 'export',

  images: {
    // 静态导出不支持服务端图片优化，直接使用原始图片
    unoptimized: true,
  },

  // 生成 /about/ -> /about/index.html，适配静态主机的目录结构
  trailingSlash: true,
}

export default nextConfig
