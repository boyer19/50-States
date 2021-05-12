let express = require('express')
let States = require('../models').States

let router = express.Router()

// fetch all of the states
router.get('/states', function(req, res, next) {
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})
// Get all info about one state
// state/California or state/Iowa
router.get('/state/:name', function(req, res, next) {
    let stateName = req.params.name
    States.findOne( {where: { name: stateName}})
        .then( state => {
            if (state) {
                return res.json(state)
            } else {
               return res.status(404).send('State not found') 
            }
        })
        .catch( err => next(err) )
})
// patch route to update a state -visited or not
// request to states/ --State Name
router.patch('/states/:name', function(req, res, next){
    let stateName = req.params.name                                     // --State name---
    let stateVisited = req.body.visited                                 // true

    States.update( { visited: stateVisited }, { where: {name: stateName }})                          // Model
        .then( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated == 1) {
                return res.send(' OK')
            }
            return res.status(404).send(' State not found')
        })
        .catch( err => next(err) )
})

//  Example Curl commands.  Windows users, please use Git Bash. You'll see errors if you try these in the command prompt or Powershell.

// Expect 'ok' message
// curl -X PATCH --data '{"visited":false}' -H "Content-Type: Application/JSON" 127.0.0.1:3000/api/states/Iowa
// curl -X PATCH --data '{"visited":true}' -H "Content-Type: Application/JSON" 127.0.0.1:3000/api/states/California

// Expect 404
// curl -X PATCH --data '{"visited":true}' -H "Content-Type: Application/JSON" 127.0.0.1:3000/api/states/qwerty
module.exports = router