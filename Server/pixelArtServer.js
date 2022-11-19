
const user = require('./user').default;
const http = require('http');
const express = require('express'); 

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    const u = new user("saf","saf","daf");
    res.send('Hello World'+ u.name);
   });




//Démarrage du serveur sur le port 8085

app.listen(PORT, () => {
    console.log('Server app listening on port ' + PORT);
});




