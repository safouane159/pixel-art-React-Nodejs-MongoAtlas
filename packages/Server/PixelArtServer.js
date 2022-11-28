const {User, Pixel, PixelBoard} = require('./models/Schemas');
const UserService = require("./services/userService");
const http = require('http');
const express = require('express');
const {MongoClient} = require('mongodb');
const {Schema, model, mongoose} = require('mongoose');
const app = express();
const PORT = 8080;
const router = express.Router();
require('dotenv').config();
const userRouter = require("./routes/userRoutes");
const pixelRouter = require("./routes/pixelRoutes");
const pixelBoardRouter = require("./routes/pixelBoardRoutes");
const cors = require('cors');
require('dotenv').config();
app.use(express.json())


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


async function main() {
    await mongoose.connect(uri);
}


main().catch(err => console.log(err));


async function toSave() {
     try{
        // const myuser = await User.create({ name: 'Alice',prenom: 'thirty',type:'synthesis'});

     try{

        // const myPixel = await Pixel.create({isChecked:false,color: 'red',user: myuser._id})


     }catch(error){
             console.log("erreur saving pixel")

     }

     }catch(error){
         console.log("erreur saving user")
     }

     
     /*const myuser = await User.create({ name: 'Alice',pseudo: 'thirty',type:'synthesis'});

    User.find({name: 'Alice'}).populate('pixels').exec((err, User) => {
        if (err) return handleError(err);
        console.log(User.length)
    });*/


    //console.log(myuser.name+" "+myuser.type+" "+myuser.prenom); // 'Silence'
    //await myuser.save();
}

toSave().catch(err => console.log(err));

app.get('/', (req, res) => {
  //  const u = new User("saf", "saf", "daf");
    res.send('Hello World' );
});

app.get('/tests', async (req, res) => {
 
    try {
        const users = await UserService.getAllUsers();
        console.log(users);
        res.json({ data: users, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  });



  app.use("/api/users", userRouter);

  app.use("/api/pixels", pixelRouter);
  app.use("/api/pixelBoard", pixelBoardRouter);
  
app.get('/helloWorld', (req, res) => {
    res.send('Raoua');
});


//Démarrage du serveur sur le port 8080

app.listen(PORT, () => {
    console.log('Server app listening on port ' + PORT);
});


