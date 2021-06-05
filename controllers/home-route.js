const router = require('express').Router();
const Client = require('../models/Client');

// route to get all clients from the client.handlebars file/page
router.get('/', async (req, res) => {
    const clientData = await Client.findAll().catch((err) => { 
        res.json(err);
      });
      //this clients const is passed in the handlebars template
        const clients = clientData.map((client) => client.get({ plain: true }));

        //we state which handlebar file to render and what data will be passed into that page
        //         hb file     list of clients(which is the array we defined ^^)
        res.render('client', { clients });
      });
  
  //route to get one client
  //not being used yet
  router.get('/client/:id', async (req, res) => {
    try{ 
        const clientData = await Client.findByPk(req.params.id);
        if(!clientData) {
            res.status(404).json({message: 'No client with this id!'});
            return;
        }
        const client = clientData.get({ plain: true });
        res.render('client', client);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;