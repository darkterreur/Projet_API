module.exports = function(server){
    return function(req, res, next){
        var Event = server.models.Event;
        var Participate = server.models.Participant;

        var eventId = req.params.id;
        var currentUserId = req.auth.userId;

        

        Event.findById(eventId, function(err, eventFound){
            if (err)
                return res.status(500).send(err);

            if (eventFound) {
                var now = new Date();
                var eventDate = new Date(eventFound.date);

                if (eventDate < now+1)
                    return res.status(500).send('La date de l\'événement est passée');

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
