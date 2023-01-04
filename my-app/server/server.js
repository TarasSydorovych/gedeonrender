const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');
const app = express()
let db;
app.use(cors());
app.get('/list', async (req, res) => {
    const picture = await db.collection('picture').find().toArray();
    console.log(picture);
     
res.send(picture)
})
app.get('/product', async (req, res) => {
    const picture = await db.collection('product').find().toArray();
    console.log(picture);
     
res.send(picture)
})
async function start() {
const client = new MongoClient('mongodb://0.0.0.0:27017/');
await client.connect()
db = client.db('gedeon');
app.listen(4000)
}
start()
