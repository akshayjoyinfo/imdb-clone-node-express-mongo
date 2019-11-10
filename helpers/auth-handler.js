const expressJwt = require('express-jwt');
const fs= require('fs');
const path = require('path');
const usersDb = require("../data-access/users-db");

var publicKEY  = fs.readFileSync(path.join(__dirname,'../auth-keys/public.key'), 'utf8');


module.exports = imdbAuthenticate;

function imdbAuthenticate(){
    return expressJwt({ secret:publicKEY, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/',
            '/users',
            '/auth'
        ]
    });
}

function isRevoked(req, payload, done) {
    const user =  usersDb.findUser('username', payload.username);
    if (!user) {
        return done(null, true);
    }

    done();
}
