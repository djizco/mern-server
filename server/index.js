const express      = require('express');
const bodyParser   = require('body-parser');

require('./environment');
require('./database');

const routes          = require('./routes');
const configPassport  = require('./passport/passport-config');

const port         = process.env.PORT;
const app          = express();

app.use(bodyParser.json());

configPassport(app, express);

app.use('/', routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
