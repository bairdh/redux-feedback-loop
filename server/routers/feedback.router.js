const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET
router.get('/admin', (req, res) =>{
    let query = `SELECT * FROM feedback
                ORDER BY date;`;
    pool.query(query).then(result =>{
        // console.log('This is the GET:', result.rows);
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

//DELETE
router.delete('/admin/:id', (req, res)=> {
    let id = req.param.id;
    let query = `
    DELETE FROM feedback
    WHERE "id" = $1;`;

    pool.query(query, [id]).then(result => {
        res.sendStatus(200);
    }).catch(err =>{
        console.log(`DELETE:`, err);
        res.sendStatus(500);
    })
})

//PUT 
router.put('/admin/:id', (req,res) => {
    let id = req.param.id;
    let query = `UPDATE feedback
                SET "flagged" = NOT "flagged"
                WHERE "id" = $1;`;
    pool.query(query, [id]).then(result =>{
        res.sendStatus(202);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})


module.exports = router;
