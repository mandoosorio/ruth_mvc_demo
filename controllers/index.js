const router = require('express').Router();

//we can just require the api folder because we have an index.js file in the api folder that exports the routes
//just like this current index file is created so that the controllers folder can be referenced as a whole in the server.js file
const apiRoutes = require('./api');
const homeRoutes = require('./home-route.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;