module.exports = function(server){
    return function(req, res, next){
        var Participate = server.models.Participant;
        var id = req.params.id;
        var participants = [];

        Participate.findById(id, function(err, data){
            if (err)
                return res.status(500).send(err);

            res.send(data);
        });
    }
}
