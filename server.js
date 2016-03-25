var express = require('express');
var server = express();

//require('./models')(server);
// require('./middlewares')(server);
// require('./actions')(server);
//require('./routes')(server);

console.log('Server listening on port 3030');
server.listen(3030);
