var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(server){
    router.get('/:id/participants',
        server.actions.events.participants);

    router.post('/',
        bodyparser,
        server.middlewares.ensureAuthentificated,
        server.actions.events.create);

    router.put('/:id',
        bodyparser,
        server.actions.events.update);

    router.delete('/:id',
        server.middlewares.ensureAuthentificated,
        server.actions.events.remove);

    router.post('/:id/inscription',
        server.middlewares.ensureAuthentificated,
        server.actions.events.inscription);

    router.delete('/:id/inscription',
        server.middlewares.ensureAuthentificated,
        server.actions.events.desinscription);

    return router;
};
