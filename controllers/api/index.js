const router = require('express').Router();

const clientRoutes = require('./client-route');

router.use('/client', clientRoutes);

module.exports = router;

//export client routes using router so that the index.js file in the controllers folder can use the client-route.js file