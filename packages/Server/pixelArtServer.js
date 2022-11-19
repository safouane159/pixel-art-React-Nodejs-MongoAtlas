
const user = require('./user');
const http = require('http');
const express = require('express'); 
const {MongoClient} = require('mongodb');

const app = express();
const PORT = 8080;

require('dotenv').config();

const{

    MONGO_URI 
} = process.env;

console.log(MONGO_URI);

const uri = MONGO_URI
//db url = mongodb+srv://safouane:safouane@pixelart.mo4v7i0.mongodb.net/test

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {

    try {
       
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db('admin').command({ ping: 1 });
    console.log('Connected successfully to server');
    } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    }
   }



   run().catch(console.dir);



app.get('/', (req, res) => {
    const u = new user("saf","saf","daf");
    res.send('Hello World'+ u.name);
   });




//Démarrage du serveur sur le port 8085

app.listen(PORT, () => {
    console.log('Server app listening on port ' + PORT);
});


