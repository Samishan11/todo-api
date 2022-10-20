const express = require('express');
const route = express.Router()
const todoModal = require('../modal/todoModal')

route.post('/post', async (req, res) => {
    const { name, age, desc } = req.body;
    try {
        const _post = await new todoModal({
            name, age, desc
        })
        console.log(req.body)
        _post.save()
        res.json({ message: "Todo Post Sucessfully", _post });
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})
route.get('/get', async (req, res) => {
    try {
        const _res = await todoModal.find()
        res.json(_res);
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

module.exports = route;