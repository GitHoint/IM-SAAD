const express = require("express");
const path = require("path")
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Roots
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
})


//Posts

app.post("/register", (req, res) => {
    var password = null;
    const registerData = {
        name: req.body.firstname + req.body.surname,
        birthday: req.body.birthday,
        phone: req.body.phone,
        email: req.body.email,
    }
    if (req.body.password == req.body.confirm) {
        password = req.body.password;
    }
    console.log(registerData, password);
})


const port = 8080;
app.listen(port, () => {
    console.log(`listening on port: ${port} `)
})