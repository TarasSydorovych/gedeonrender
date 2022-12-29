const express = require('express');
const {MongoClient} = require('mongodb');
const app = express()
let db;
app.get('/', async (req, res) => {
    const picture = await db.collection('picture').find().toArray();
    console.log(picture);
     
res.send(`${JSON.stringify(picture[0])}`)
})
async function start() {
const client = new MongoClient('mongodb://0.0.0.0:27017/');
await client.connect()
db = client.db('gedeon');
app.listen(4000)
}
start()
