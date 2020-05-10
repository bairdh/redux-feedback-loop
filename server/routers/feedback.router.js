const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET
router.get('/admin', (req, res) =>{
    let query = `SELECT * FROM feedback;`;
    pool.query(query).then(result =>{
        // console.log(result.rows);
        
        res.send(result.rows);
    }).catch(err =>{
        console.log(err);
        res.sendStatus(err);
    })
})

//POST
router.post('/', (req, res) =>{
    let feedback= req.body

    console.log(`Feedback:`, feedback);
    
    let query = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    pool.query(query, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(result =>{
        res.sendStatus(201);
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500);
    })
})

//PUT


module.exports = router;
