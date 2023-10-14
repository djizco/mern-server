const bodyParser   = require('body-parser');
const cors         = require('cors');
const express      = require('express');

require('./environment');
require('./database');

const configPassport  = require('./passport/config');
const routes          = require('./routes');

const port         = process.env.PORT;
const origin       = process.env.ORIGIN;
const app          = express();

app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin,
}));

configPassport(app, express);

app.use('/', routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
