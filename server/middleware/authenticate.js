const jwt = require('jsonwebtoken');
const config = require('config');
const JWT_SECRET = 'missionimpossible!';

const authenticate = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('auth-token');

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Add the decoded user object to the request
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authenticate;
