module.exports = function(server){
    return function(req, res, next){
        var User = server.models.User;
        var Event = server.models.event;
        var Participate = server.models.participant;

        var eventId = req.params.id;
        // var currentUser = new User(userConnected);

// TEMPORAIRE, recup l'user authentifié
var userId = "56f52b8d2aa052d81f7b9ffd";

        Event.findById(eventId, function(err, eventFound){
            if (err)
                return res.status(500).send(err);

            if (eventFound) {
                var participate = new Participate({user_id: userId, event_id: eventFound._id});

                participate.save(function(err, data){
                    if(err) {
                        return res.status(500).send(err);
                    }

                    res.json(data);
                });
            }
        });
    }
}
