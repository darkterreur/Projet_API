var express = require('express');
var server = express();

require('./settings')(server);
require('./models')(server);
require('./middlewares')(server);
require('./actions')(server);
require('./routes')(server);

console.log('Server listening ');
server.listen(server.settings.port);
