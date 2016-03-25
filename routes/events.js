var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(server){
    router.get('/:id/participants',
        server.actions.events.participants);

    router.post('/',
        bodyparser,
        server.actions.events.create);

    router.put('/:id',
        bodyparser,
        server.actions.events.update);

    router.delete('/:id',
        server.actions.events.remove);

    return router;
};
