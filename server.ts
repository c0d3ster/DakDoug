import express from 'express'
import path from 'path'
import https from 'https'
import fs from 'fs'

const app = express();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

const httpsOptions = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('fullchain.pem')
}

https.createServer(httpsOptions, app).listen(3000, () => {
  console.log('Server is listening on https://localhost:3000')
})
