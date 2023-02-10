const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static("LASHAKA FASHION"));

app.post("/api/authenticate", (req, res) => {
  const { email, password } = req.body;
  // Verify the credentials provided by the user
  if (email === "user@example.com" && password === "password") {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));









// const bodyParser = require("body-parser");
// const express = require("express");
// const jwtMiddleware = require("express-jwt");
// const app = express();
// const path = require("path");
// const jwt = require("jsonwebtoken");

// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "LASHAKA FASHION")));

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

// //Middleware to protect endpoints except /login
// app.use(jwtMiddleware({ secret: "secretkey" }).unless({ path: ["/login"] }));

// //User data storage
// const users = [
//   { id: 1, email: "admin@example.com", password: "adminadmin" },
//   { id: 2, email: "user1@example.com", password: "password1" },
//   { id: 3, email: "user2@example.com", password: "password2" },
//   { id: 4, email: "user3@example.com", password: "password3" },
// ];

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );
//   if (!user) {
//     return res.status(401).send("Email or password is incorrect");
//   }
//   const token = jwt.sign({ sub: user.id }, "secretkey");
//   res.send({ token });
// });
