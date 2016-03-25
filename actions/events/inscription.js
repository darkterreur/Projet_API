module.exports = function(server){
    return function(req, res, next){
        var Participate = server.models.Participant;

        var eventId = req.params.id;
        var currentUserId = req.auth.userId;

        Event.findById(eventId, function(err, eventFound){
            if (err)
                return res.status(500).send(err);

            if (eventFound) {
                var participate = new Participate({user_id: currentUserId, event_id: eventFound._id});

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
