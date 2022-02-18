const router = require('express').Router();
let Address = require('../models/address.model'); //mongoose router

router.route('/').get((req, res) => { 
    Address.find() 
    .then(address => res.json(address))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { 
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phonenumber = Number(req.body.phonenumber); 

    const newAddress = new Address({
        username,
        firstname,
        lastname,
        email,
        phonenumber
    });

    newAddress.save()
    .then(() => res.json('Address added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => { 
    Address.findById(req.params.id)
    .then(address => res.json(address))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { 
    Address.findByIdAndDelete(req.params.id)
    .then(address => res.json('Address Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => { 
    Address.findById(req.params.id)
    .then(address => {
        address.username = req.body.username;
        address.firstname = req.body.firstname;
        address.lastname = req.body.lastname;
        address.email = req.body.email;
        address.phonenumber = Number(req.body.phonenumber);

        address.save()
        .then(() => res.json('Address Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;