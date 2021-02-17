const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  console.log(req.url)
  const body = fs.readFileSync(`./public/index.html`)
  res.end(body)
})
server.listen(process.env.PORT || 5000)
console.log('Server started')