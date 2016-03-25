module.exports = function(server) {
    return function(req, res, next) {
        var Event = server.models.Event;
        var eventId = req.params.id;

        Event.findById(eventId, function(err, eventScherched){
            if (err)
                return res.status(500).send(err);

            if (eventScherched.user_id != req.auth.userId)
                return res.status(500).send("Vous n'êtes pas propriétaire");
        });

        Event.remove({_id: eventId}, function(err, data){
            if (err)
                return res.status(500).send(err);

            res.send(data);
        })
    }
};
