const e = require('express');
const houses = require('./db.json')

let id = 4

module.exports = {
    getHouses: function(req, res) {
        res.status(200).send(houses)
    },
    deleteHouse: function (req,res) {
        const targetIndex = houses.findIndex(function (houseObj) {
            return houseObj.id === +req.params.houseId
        });

        houses.splice(targetIndex, 1)
        res.status(200).send(houses)
    },
    createHouse: function(req,res) {
        const { address, price, imageURL } = req.body

        const newHouse = {
            id, address, price, imageURL
        }

        houses.push(newHouse)
        id++

        res.status(200).send(houses)

    },
    updateHouse: function(req, res) {
        let { houseId } = req.params
        let { type } = req.body
        let index = houses.findIndex(function (houseObj) {
            return houseObj.id === +houseId
        });

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send('These was an error that has occurred')
        }

    }
}