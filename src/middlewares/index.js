module.exports = {
  ...require('./validation-post'),
  ...require('./checkLoggedIn'),
  ...require('./checkOwnPost'),
  ...require('./Joi-update-middleware'),
  ...require('./Joi-write-middleware'),
  ...require('./jwt-middleware'),
  ...require('./validation-design'),
  ...require('./validation-post'),
};
