const express = require("express");
const path = require("path")
const app = express();
const registration = require("./App/server/controllers/registration");
const search = require("./App/server/controllers/search");
const login = require("./App/server/controllers/login");
const borrower = require("./App/server/controllers/borrow");
const bcrypt = require('bcrypt');
var session = require('express-session');
const returner = require('./App/server/controllers/return');
const procurement = require('./App/server/controllers/procurement');
const { getHashes } = require("crypto");

//session
var currUser = {
    ID: null,
    name: null,
    email: null,
    type: null
}
const reset = {
    ID: null,
    name: null,
    email: null,
    type: null
};

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '/App/client')); Commented out for development, to be sorted at final stage

app.use(express.static(__dirname + '/App/client'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Roots
app.get("/", (req, res) => {
    res.render("home", {currUser: currUser });
});

app.get("/register", (req, res) => {
    res.render("register", {currUser: currUser });
});

app.get("/login", (req, res) => {
    res.render("login", {currUser: currUser });
})

app.get("/home", (req, res) => {
    res.render("home", {currUser: currUser });
})

app.get("/procurement",(req,res)=>{
    res.render("stock-procurement", {currUser: currUser });
})
app.get("/account-page", (req, res) => {
    res.render("account-page", {currUser: currUser })
})
app.get("/return", (req, res) => {
    res.render("return", {currUser: currUser })
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
    const emailCheck = new login();
    emailCheck.loginUser("'" + registerData.email + "'", function(result){
        if (result != null){
            if (req.body.password == req.body.confirm) {
                password = req.body.password;
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        const register = new registration();
                        console.log(hash);
                        register.register(registerData.name, hash, "member", registerData.email, registerData.birthday, registerData.phone)
                        res.render("login");
                    })
                });
            } else {
                console.log("Password does not match");
            }
        } else {
            console.log("A user exists with this email");
        }
    })
});

app.post("/login", async (req, res) => {
    const loginObj = new login();
    loginObj.loginUser("'" + req.body.email + "'", function (result) {
        if (result != null) {
            console.log(result);
            var dbData = result[0];
            var hashed = dbData.password;
            if (bcrypt.compareSync(req.body.password, hashed)) {
                currUser.ID = dbData.userId;
                currUser.name = dbData.username;
                currUser.type = dbData.role;
                currUser.email = dbData.email;
                console.log(currUser);
                res.render("home", { currUser: currUser });
            }
            else {
                console.log("Password Incorrect");
            }
        } else {
            console.log("User not recognised.");
        }
    })
})

app.post("/procure", async (req, res)=>{
    let procure = new procurement();
    procure.procure(req.body.title,"0",req.body.description,req.body.mediaType,req.body.releaseYear);
    res.render("stock-procurement", {currUser: currUser });
})

app.post("/search", async (req, res) => {
    let searcher = new search();
    searcher.searchMedia("name = " + "'" + req.body.query +"'" + " AND " + " userId = 1" , function(results){
        res.render("catalogue", {
            searchResults: results,
        },
        {currUser: currUser }
    );
    });
})

app.post("/borrow", async (req, res) => {
    console.log(req.body);
    let borrow = new borrower();
    borrow.borrower(currUser,req.body.mediaId);
    res.render("home",{currUser: currUser });
});

app.post("/return", async(req, res) =>{
    let ret = new returner();
    ret.returnMedia(req.body.mediaId)
    res.render("return",{currUser: currUser });
});

app.post("/returnSearch", async(req,res) =>{
    let searcher = new search();
    searcher.searchMedia("userId = " + currUser , function(results){
        res.render("return", {
            searchResults: results
        },{currUser: currUser })
    });
});

const port = 8080;
app.listen(port, () => {
    console.log(`listening on port: ${port} `)
})