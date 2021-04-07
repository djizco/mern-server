const express      = require('express');
const bodyParser   = require('body-parser');
const cors         = require('cors');
const https        = require('https');
const fs           = require('fs');

require('./environment');
require('./database');

const routes          = require('./routes');
const configPassport  = require('./passport/passport-config');

const key = fs.readFileSync(__dirname + '/etc/ssl/certs/selfsigned.key');
const cert = fs.readFileSync(__dirname + '/etc/ssl/certs/selfsigned.crt');

const credentials = { key, cert };

const port         = 443;
const origin       = process.env.ORIGIN;
const app          = express();

app.use(bodyParser.json());
app.use(cors({
  origin,
  optionsSuccessStatus: 200,
}))

configPassport(app, express);

app.use('/', routes);

const server = https.createServer(credentials, app);

server.listen(port, () => console.log(`HTTPS server is listening on port ${port}`);

// app.listen(port, () => console.log(`Server is listening on port ${port}`));
