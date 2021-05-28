const jwt = require('express-jwt');
const secret = require('../config').secret;
// const secret = { secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret', algorithms: ['HS256'] };

function getTokenFromHeader(req){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
      req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

const auth = {
  required: jwt({
    secret: secret,
    algorithms: ['HS256'],
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    algorithms: ['HS256'],
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};

module.exports = auth;
