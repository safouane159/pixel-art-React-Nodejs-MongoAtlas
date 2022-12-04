const {User, Pixel, PixelBoard} = require('./models/Schemas');
const UserService = require("./services/userService");
const http = require('http');
const express = require('express');
const {MongoClient} = require('mongodb');
const {Schema, model, mongoose} = require('mongoose');
const app = express();
const PORT = 8080;
var bcrypt = require('bcryptjs');
const router = express.Router();
require('dotenv').config();
const userRouter = require("./routes/userRoutes");
const pixelRouter = require("./routes/pixelRoutes");
const pixelBoardRouter = require("./routes/pixelBoardRoutes");
const cors = require('cors');
require('dotenv').config();
app.use(express.json())
const config = process.env;

var jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});
app.use(cors({
    origin: '*'
  }));


  /*app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
*/

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

        const myPixel = await Pixel.create({positionX:3,positionY: 4})
        const myPb = await PixelBoard.create({pixels:myPixel})
        await myPb.save();
     }catch(error){
             console.log("erreur saving pixel")

     }

     
     /*const myuser = await User.create({ name: 'Alice',pseudo: 'thirty',type:'synthesis'});

    User.find({name: 'Alice'}).populate('pixels').exec((err, User) => {
        if (err) return handleError(err);
        console.log(User.length)
    });*/


    //console.log(myuser.name+" "+myuser.type+" "+myuser.prenom); // 'Silence'

}

app.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { name,pseudo,type, password } = req.body;
  
      // Validate user input
      if (!(pseudo && password && name )) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ pseudo });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        name,
        pseudo: pseudo.toLowerCase(),
        type: "utilisateur",
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, pseudo },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
//toSave().catch(err => console.log(err));
app.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { pseudo, password } = req.body;
  
      // Validate user input
      if (!(pseudo && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ pseudo });
  
      if (user && (await bcrypt.compare(password, user.password)) ) {
        console.log( user._id);
        // Create token
        const token = jwt.sign(
          { user_id: user._id, pseudo },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  console.log
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }else{     res.status(400).send("Invalid Credentials"); }
  
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  
app.get('/',auth, (req, res) => {
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



  app.use("/api/users",auth, userRouter);
  app.use("/api/pixels", auth,pixelRouter);
  app.use("/api/pixelBoard",auth, pixelBoardRouter);
  
app.get('/helloWorld', auth,(req, res) => {
    res.send('Raoua');
});


//Démarrage du serveur sur le port 8080

app.listen(PORT, () => {
    console.log('Server app listening on port ' + PORT);
});


