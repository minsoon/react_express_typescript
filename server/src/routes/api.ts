import express, { Request, Response } from 'express'
import http from './../lib/http'
const router = express.Router()

router.get('/getCart', (req: Request, res: Response) => {
    try {
        http({
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
        http({
            method: 'POST',
            uri: '/items/get',
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
