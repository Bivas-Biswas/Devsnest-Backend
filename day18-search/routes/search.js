const express = require('express')
const { Op } = require("sequelize")
const sequelize = require('../database')
const Artist = require('../models/artist')

const router = express.Router()

/*
* Full Text Search - Name : {req.query.q}
* Partial Search -  Name: {
            [Op.like]: `%${req.query.q}%`
        }
*/
router.get('/', async (req, res) => {
    try {
        const products = await Artist.findAll({
            where: {
                Name: {
                    [Op.like]: `%${req.query.q}%`
                }
            }
        })
        res.status(200).send({
            items: products
        })
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: true
        })
    }
})


// trigram search

router.get('/trgm', (req, res) => {
    sequelize
        .query("CREATE EXTENSION IF NOT EXISTS pg_trgm;") // use only one time
        .then(() => {
            Artist.findAll({
                attributes: {
                    include: [
                        [
                            sequelize.fn(
                                "similarity",
                                sequelize.col("Name"),
                                req.query.q
                            ),
                            "score",
                        ],
                    ],
                },
                where: [
                    sequelize.where(
                        sequelize.fn("similarity", sequelize.col("Name"), req.query.q),
                        {[Op.gt]: 0.2}
                    )
                ],
            })
                .catch((err) =>{
                    console.log(e)
                    res.status(500).send(err)
                })
        })
})
