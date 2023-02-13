const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const file = "./db/db.json";
const filePath = path.join(__dirname, file);

app.use(express.static(__dirname + "/dist/cool-website"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/cool-website/index.html");
});

app.post("/", async (req, res) => {
  let data = req.body;

  let dbJson = JSON.parse(await fs.readFile(filePath));
  dbJson.push(data);
  await fs.writeFile(filePath, JSON.stringify(dbJson));

  res.send(data);
  res.end();
});

let server = app.listen(8080, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Exress is running on port ", port, " Host: ", host);
});

const users = [
  { email: "admin@admin.com", password: "admin", roles: "admin" },
  { email: "user2@example.com", password: "password2", roles: "user" },
  { email: "user3@example.com", password: "password3", roles: "user" },
  // Add more records here
];

// app.get("/login", (req, res) => {
//   res.redirect("/Home");
// });

// app.post("/login", (req, res) => {
//   res.redirect("/Home");
//   // handle the login logic here
// });

app.post("/submitlogin", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    if (user.roles === "admin") {
      // check if admin, if admin give more prievleges

      // res.status(200).send({ message: "Welcome admin" });
      // res.redirect(200, "/home", { message: "Welcome admin" });
      res.status(200).json({ message: "Welcome admin" });
    } else if (user.roles === "user") {
      username = email.substring(0, email.indexOf("@"));
      //res.status(200).send({ message: "Welcome", username });
      //  res.redirect(200, "/home", { message: "Welcome " + username });
      res.status(200).json({ message: "Welcome " + username });
    }
    // redirect to home with hello 'username'
    // res.status(200).send({ message: "Login successful" });
    // give all needed data for profile

    //res.redirect("/login/success");
  } else {
    // login failed
    // return same page with no such user found
    //res.render("login", { error: "Invalid username or password" });

    // res.status(401).send({ message: "Invalid email or password" });
    //  res.redirect(401, "/login", { error: "Invalid email or password" });
    res.status(401).json({ error: "Invalid email or password" });
  }
});

app.get("/home", (req, res) => {
  const user = req.session.user;
  if (!user) {
    res.redirect("/login");
  } else {
    res.render("home", { user });
  }
});

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
