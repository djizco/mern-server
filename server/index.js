const express      = require('express');
const bodyParser   = require('body-parser');
const cors         = require('cors');

require('./environment');
require('./database');

const routes          = require('./routes');
const configPassport  = require('./passport/passport-config');

const port         = process.env.PORT;
const origin       = process.env.ORIGIN;
const app          = express();

app.use(bodyParser.json());
app.use(cors({
  origin,
  optionsSuccessStatus: 200,
}))

configPassport(app, express);

app.use('/', routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
