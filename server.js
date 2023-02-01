//Basic connection
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("LASHAKA FASHION"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



// authentication
const jwt = require('jsonwebtoken');
const jwtMiddleware = require('express-jwt');


app.use(jwtMiddleware({ secret: 'secretkey' }).unless({ path: ['/login'] }));


app.post('/login', (req, res) => {
  // Authenticate the user, e.g. by checking their credentials against a database.
  // If the authentication is successful, create a JWT and send it back to the client.
  const token = jwt.sign({ sub: user.id }, 'secretkey');
  res.send({ token });
});
