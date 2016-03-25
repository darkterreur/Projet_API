module.exports = function(server) {
    return function(req, res, next) {
        var eventId = req.params.id;
        var currentUserId = req.auth.userId;
        var Participate = server.models.participant;

        Participate.remove({user_id: currentUserId, event_id: eventId}, function(err, data){
            if (err)
                return res.status(500).send(err);

            res.send(data);
        })
    }
};
