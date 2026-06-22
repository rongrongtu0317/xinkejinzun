import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 部署方式：Hostinger 的 Node.js 应用（Passenger），入口为根目录 server.js。
  // 不再使用静态导出(output:'export')，因此：
  //   - next/image 原生图片优化自动生效（无需 unoptimized，服务端按设备尺寸/WebP 实时优化）
  //   - /api/* 路由、SSR 等需要服务器的能力可正常工作
  // 构建流程：npm run build 生成 .next/，再由 server.js 启动服务。
  //
  // 说明：原先为静态导出加的 trailingSlash 已移除——在 Node 服务器下它会让每个
  // /_next/image 优化请求和 /api 请求多吃一次 308 跳转，得不偿失。旧的带斜杠链接
  // （如 /about/）Next 会自动 308 重定向到 /about，不影响访问。
}

export default nextConfig
