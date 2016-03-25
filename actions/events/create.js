module.exports = function(server){
    return function(req, res, next){
        var Event = server.models.Event;
        var Category = server.models.Category;
        var event = new Event(req.body);
        var category = new Category(req.body.category);

        if (!category || !category.label || !event.title || !event.description || !event.date || !event.place
        || !event.max_participant_number) {
            return res.status(500).send('Tous les champs sont obligatoires');
        }

        category.label.toLocaleLowerCase();

        Category.find({label: req.body.category.label}).exec(function(err, data){
            if(err)
                return res.status(500).send(err);

            if(data.length == 0) {
                category.save(function(err, data){
                    if(err) {
                        return res.status(500).send(err);
                    }
                });
            } else {
                category = data[0];
            }

            event.category = category._id;

            event.save(function(err, data){
                if(err) {
                    return res.status(500).send(err);
                }

                res.json(data);
            });
        });
    }
};
