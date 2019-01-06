const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');
const app = express();

const DIST_DIR = path.join(__dirname, 'public/');
const SSL_DIR = ('/etc/letsencrypt/live/dakdoug.com');
const PORT = 443;

const options = {
  key: fs.readFileSync(path.join(SSL_DIR, 'privkey.pem')),
  cert: fs.readFileSync(path.join(SSL_DIR, 'fullchain.pem'))
}

const server = https.createServer(options, app);

app.use(express.static(DIST_DIR));

app.get('*', function(req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

server.listen(PORT, () => console.log("Personal website backend listening on port " + PORT));
