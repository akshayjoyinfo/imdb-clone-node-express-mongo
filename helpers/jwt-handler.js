const fs   = require('fs');
const path = require('path');
const jwt   = require('jsonwebtoken');

// use 'utf8' to get string instead of byte array  (512 bit key)
var privateKEY  = fs.readFileSync(path.join(__dirname,'../auth-keys/private.key'),'utf8');
var publicKEY  = fs.readFileSync(path.join(__dirname,'../auth-keys/public.key'),'utf8');

module.exports = {
 sign: (payload, $Options) => {
  var signOptions = {
      issuer:  $Options.issuer,
      subject:  $Options.subject,
      audience:  $Options.audience,
      expiresIn:  "15m",    // 30 days validity
      algorithm:  "RS256"
  };
  return jwt.sign(payload, privateKEY, signOptions);
},
verify: (token, $Option) => {

  var verifyOptions = {
      issuer:  $Option.issuer,
      subject:  $Option.subject,
      audience:  $Option.audience,
      expiresIn:  "15m",
      algorithm:  ["RS256"]
  };
   try{
     return jwt.verify(token, publicKEY, verifyOptions);
   }catch (err){
     return false;
   }
},
 decode: (token) => {
    return jwt.decode(token, {complete: true});
    //returns null if token is invalid
 }
}
