module.exports = function(server) {
    return {
        create: require('./create')(server),
        participants: require('./participants')(server),
        update: require('./update')(server),
        remove: require('./remove')(server),
        inscription: require('./inscription')(server),
        desinscription: require('./desinscription')(server)
    }
};
