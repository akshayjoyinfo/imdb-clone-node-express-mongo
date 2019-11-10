/* eslint-disable no-unused-vars */
import { findUser } from "../../../data-access/users-db";
import jwtInfo from '../../../auth-keys/jwt-info';
import { sign } from '../../../helpers/jwt-handler';

const auth = (module.exports = {});
import { compareSync } from 'bcryptjs';


auth.login = (req, res, next) => {
    const { username,password } = req.body;
    findUser('username', username ).then(data =>{
        if(data){
            const user= data;
            if (user && compareSync(password, user.hash)) {
                const { hash, ...userWithoutHash } = user;

                const token = sign({ userObj: userWithoutHash }, jwtInfo);
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
