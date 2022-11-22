const {User, Pixel, PixelBoard} = require('./Schemas');
const http = require('http');
const express = require('express');
const {MongoClient} = require('mongodb');
const {Schema, model, mongoose} = require('mongoose');
const app = express();
const PORT = 8080;

const cors = require('cors');
require('dotenv').config();
app.use(cors({
    origin: 'http://localhost:3000'
  }));
const {
    MONGO_URI
} = process.env;

console.log(MONGO_URI);



const uri = MONGO_URI

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {

    try {

        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Establish and verify connection
        await client.db('admin').command({ping: 1});
        console.log('Connected successfully to server');


        const UserRoute = require('./Routes/User');
        app.use('/users', UserRoute);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function main() {
    await mongoose.connect(uri);
}

run().catch(console.dir);
main().catch(err => console.log(err));


//const myuser = await user.create({ name: 'Silence',prenom: 'alice',type:'admin'});

// const myuser = new user({ name: 'Silence',prenom: 'alice',type:'admin'});

//


async function toSave() {
    /* try{
         const myuser = await user.create({ name: 'Alice',prenom: 'thirty',type:'synthesis'});

     try{

         const myPixel = await pixel.create({isChecked:false,color: 'red',user: myuser._id})


     }catch(error){
             console.log("erreur saving pixel")

     }

     }catch(error){
         console.log("erreur saving user")
     }

     */

    User.find({name: 'Alice'}).populate('pixels').exec((err, User) => {
        if (err) return handleError(err);
        console.log(User.length)
    });


    //console.log(myuser.name+" "+myuser.type+" "+myuser.prenom); // 'Silence'
    //await myuser.save();
}

toSave().catch(err => console.log(err));
app.get('/', (req, res) => {
    const u = new user("saf", "saf", "daf");
    res.send('Hello World' + u.name);
});

app.get('/helloWorld', (req, res) => {

    res.send('Raoua JTM <');
});


//Démarrage du serveur sur le port 8080

app.listen(PORT, () => {
    console.log('Server app listening on port ' + PORT);
});


