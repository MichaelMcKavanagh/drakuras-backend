const moment = require('moment');

module.exports = (req, res, next) => {
  console.log(`${moment().format('h:mm A')} ${req.method} ${req.path}`);
  next();
};
