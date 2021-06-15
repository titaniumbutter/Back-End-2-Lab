const express = require('express')
const app = express()
const cors = require('cors')
const ctrl = require('./controller')

const { getHouses, deleteHouse, createHouse, updateHouse} = ctrl


app.use(express.json())
app.use(cors())

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:houseId', updateHouse);
app.delete('/api/houses/:houseId', deleteHouse);



const SERVER_PORT = 4004
app.listen(SERVER_PORT, function () {
    console.log(`Server is running on ${SERVER_PORT}`)
});