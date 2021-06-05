const router = require('express').Router();
const Client = require('../../models/Client');

router.post('/', async (req, res) => {
    console.log(req.body);
  try {
    const clientData = await Client.create({
      client_name: req.body.client_name,
      description: req.body.description,
      address: req.body.address,
      phone: req.body.phone,
      dob: req.body.dob
    });
    res.status(200).json(clientData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//not being used yet
router.put('/:id', async (req, res) => {
  try {
    const client = await Client.update(
      {
        client_name: req.body.client_name,
        description: req.body.description,
        address: req.body.address,
        phone: req.body.phone,
        dob: req.body.dob
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(client);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;