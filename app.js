const express = require("express");
const path = require("path")
const app = express();
const registration = require("./App/server/controllers/registration");
const search = require("./App/server/controllers/search");
const login = require("./App/server/controllers/login");
const bcrypt = require('bcrypt');
var session = require('express-session');

//session
var currUser = null;
var loginState = false;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/App/client'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//hashing
const saltRounds = 10;

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

app.get("/home", (req, res) => {
    res.render("home");
})

//Posts
app.post("/register",  async (req, res) => {
    var password = null;
    const registerData = {
        name: req.body.firstname + req.body.surname,
        birthday: req.body.birthday,
        phone: req.body.phone,
        email: req.body.email,
    }
    if (req.body.password == req.body.confirm) {
        password = req.body.password;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                const register = new registration();
                console.log(hash);
                register.register(registerData.name, hash, "member", registerData.email, registerData.birthday, registerData.phone)
                res.render("login");
            })
        })
    }
})

app.post("/login", async (req, res) => {
    loginData = {
        email: req.body.email,
        password: req.body.password
    }
    const loginObj = new login();
    loginObj.loginUser(req.body.email, function(result){
        console.log(result);
    })
})

app.post("/catalogue", async (req, res) =>{
    const mediaId = req.body.mediaId;  // Extract mediaId from the request body
    let searcher = new search();
    // Call the search.searchMedia function
    searcher.searchMedia(`mediaId = ${mediaId}`, function(results) {
        // Log the results to the console (optional)
        console.log(results);
        // Send the results back to the clients
        res.json({
        message: 'Search completed successfully!',
        data: results
        });
    });
})

app.post("/search", async (req, res) => {
    let searchResults = [
        { mediaName: "Media1", mediaDesc: "This is 1st Media" },
        { mediaName: "Media2", mediaDesc: "This is 2nd Media" }
    ]
    res.render("catalogue", {
        searchResults: searchResults
    })
})

app.post("/borrow", async (req, res) => {
    console.log(req.body);
    res.render("home");
})

const port = 8080;
app.listen(port, () => {
    console.log(`listening on port: ${port} `)

})