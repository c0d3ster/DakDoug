const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
//const bodyParser = require('body-parser');

const DIST_DIR = path.join(__dirname, "src/public/");
const PORT = 3000;

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(DIST_DIR)); 


app.get('*', function(req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => console.log("Personal website backend listening on port " + PORT));