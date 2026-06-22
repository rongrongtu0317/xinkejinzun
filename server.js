// 自定义 Node 服务器 —— 用于 Hostinger 的 Node.js 应用（Passenger）部署。
// Passenger 把本文件作为应用入口，并通过 PORT 环境变量告诉我们该监听哪个端口。
// 本文件不经过 Next 编译，必须用当前 Node 版本能直接运行的语法（这里用 CommonJS）。
//
// 部署前提：已先运行 `npm run build` 生成 .next/ 目录，且已 `npm install` 安装依赖。
const { createServer } = require('http')
const next = require('next')

const port = parseInt(process.env.PORT || '3000', 10)

// dev:false —— 生产模式，读取构建产物 .next/
const app = next({ dev: false })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res)
    }).listen(port, () => {
      console.log(`> Next.js 已启动，监听端口 ${port}`)
    })
  })
  .catch((err) => {
    console.error('服务器启动失败：', err)
    process.exit(1)
  })
