module.exports = function(server){
    return function(req, res, next){
        var Participate = server.models.Participant;
        var Event = server.models.Event;
        var id = req.params.id;
        var participants = [];
        var events = [];
        Participate.find({ user_id : id }, function(err, participants){
            if (err)
                return res.status(500).send(err);

            //res.send(data);

        });
        for (var i = 0 ; i< participants.length; i++)
        {
            Event.findById( participants[i] , function(err, events){
                if (err)
                    return res.status(500).send(err);

                res.send(events);

            });

        }
    }
}
