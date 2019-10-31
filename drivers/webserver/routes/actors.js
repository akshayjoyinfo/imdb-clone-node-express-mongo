const debug = require('debug')('imdb-clone-api:authMiddleware')

const actors = (module.exports = {});


actors.getAllActors = (req, res, next) => {
    res.json({message: 'GetAllActors working as expected'});
}
