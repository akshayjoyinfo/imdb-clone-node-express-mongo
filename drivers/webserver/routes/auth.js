const usersDb = require("../../../data-access/users-db");
const jwtInfo = require('../../../auth-keys/jwt-info');
const jwtHandler = require('../../../helpers/jwt-handler');
const debug = require('debug')('imdb-clone-api:authMiddleware')

const auth = (module.exports = {});
const bcrypt = require('bcryptjs');


auth.login = (req, res, next) => {    
    const { username,password } = req.body;
    usersDb.findUser('username', username ).then(data =>{
        if(data){
            user= data;
            if (user && bcrypt.compareSync(password, user.hash)) {
                const { hash, ...userWithoutHash } = user;

                const token = jwtHandler.sign({ userObj: userWithoutHash }, jwtInfo);
                res.send( {
                    userObj: userWithoutHash,
                    token
                });
            }else{
                return res.json({ token: null, error: "Authentication failed"})
            }
        }else{
            return res.json({ token: null, error: "Invalid Username"})
        }
    }).catch(next);

}