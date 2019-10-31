const debug =require('debug')('imdb-clone-api:ErrorHandler-Middleware');

module.exports = errorHandler;

function errorHandler(err, req, res, next) {    
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ error: 'ValidationError',message: err.details.map(el => el.message) });
    }

    if (err.name === 'UnauthorizedError') {
        if(err.message==='jwt expired'){
            return res.status(401).json({ message: 'Access Token Expired , Please login again' });
        }else if(err.message==='invalid signature'){
            return res.status(401).json({ message: 'Invalid Token Signature , Please login again' });
        }else{
        return res.status(401).json({ message: 'Invalid Token' });
        }
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}