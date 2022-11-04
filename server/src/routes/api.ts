import express, { Request, Response } from 'express'
const request = require('request')
const router = express.Router()

router.get('/getCart', (req: Request, res: Response) => {
    try {
        request({
            method: 'GET',
            uri: `${process.env.REACT_APP_CLIENT_API_TEST_URL}/cart`
        }, (error: any, response: any, body: any) => {
            if (error) {
                console.log(error)
            }
            let obj = JSON.parse(body)
            res.send(obj)
        })

    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/items', (req: Request, res: Response) => {
    try {
        request({
            method: 'POST',
            uri: `${process.env.REACT_APP_SERVER_API_URL}/items/get`,
            body: req.body.itemNos,
            json: true
        }, (error: any, response: any, body: any) => {
            if (error) {
                console.log(error)
            }
            res.send(body)
        })

    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
