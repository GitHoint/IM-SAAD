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
const account = require('./App/server/controllers/account');

//session
var currUser = {
    ID: null,
    name: null,
    email: null,
    birthday: null,
    phone: null,
    type: null
}
const reset = {
    ID: null,
    name: null,
    email: null,
    birthday: null,
    phone: null,
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
    res.render("login", {currUser: currUser, errorMsg: null });
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
app.get("/account-edit", (req, res) => {
    res.render("account-edit", {currUser: currUser })
})
app.get("/returnSearch", async(req,res) =>{
    let searcher = new search();
    searcher.searchMedia("userId = " + currUser.ID , function(results){
        console.log(results);
        res.render("return", {
            searchResults: results,
            currUser: currUser 
        })
    });
});

//Posts
/*
    Title: Login & Registration
    Description: the following 2 post calls handle the login and registration for the user, along with
    hashing of passwords for added security, and assignment of user roles for user access control
    edit: also includes logout functionality
    Primary Author: Joshua Osborne
    Further Authors:
    Date Last Modified: 18/12/2024
    Technologies: Nodejs/Express
    Notes:
    */
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
        if (result.length > 0) {
            console.log(result);
            var dbData = result[0];
            var hashed = dbData.password;
            if (bcrypt.compareSync(req.body.password, hashed)) {
                currUser.ID = dbData.userId;
                currUser.name = dbData.username;
                currUser.type = dbData.role;
                currUser.email = dbData.email;
                currUser.birthday = dbData.dob;
                currUser.phone = dbData.phone;
                console.log(currUser);
                res.render("home", { currUser: currUser });
            }
            else {
                res.render("login", {errorMsg: "Incorrect Password"});
            }
        } else {
            res.render("login", {errorMsg: "User Not Recognised"});
        }
    })
})

app.post("/logout", async (req, res) => {
    currUser = reset;
    res.render("home", {currUser: currUser});
})
app.post("/procure", async (req, res)=>{
    let procure = new procurement();
    procure.procure(req.body.title,"0",req.body.description,req.body.mediaType,req.body.releaseYear);
    res.render("stock-procurement", {currUser: currUser });
})

app.post("/search", async (req, res) => {
    let searcher = new search();
    console.log(req.body.query);
    if(req.body.query == ""){
        searcher.searchMedia( " userId = 1" , function(results){
            console.log(results);
            res.render("catalogue", {
                searchResults: results,
                currUser: currUser
            }
        );
        });

    }else{
        searcher.searchMedia("name = " + "'" + req.body.query +"'" + " AND " + " userId = 1" , function(results){
            res.render("catalogue", {
                searchResults: results,
                currUser: currUser
            }
        );
        });
    }
    
})

app.post("/borrow", async (req, res) => {
    /*
    Title: Account
    Description: this a post call for the borrow functionality of the scope thay will use the borrow controller
    and render a media to be assinged to a logged in current user
    Primary Author: Patrick Newell
    Further Authors:
    Date Last Modified: 16/12/2024
    Technologies: Nodejs/Express
    Notes:
    */
    console.log(req.body);
    let borrow = new borrower();
    borrow.borrower(currUser.ID,req.body.mediaId);
    res.render("home",{currUser: currUser });
});
app.post("/return", async(req, res) =>{
    let ret = new returner();
    ret.returnMedia(req.body.mediaId)
    res.render("home",{currUser: currUser });
});

app.post("/updateDetails"), async (req, res) => {
    let currAccount = new account();
    currAccount.email(req.body.email, currUser.ID);
    currAccount.birth(req.body.birthday, currUser.ID);
    currAccount.username(req.body.fname, currUser.ID);
    currAccount.phone(req.body.phone, currUser.ID);
    currUser.email = req.body.email;
    currUser.birthday = req.body.birthday;
    currUser.name = req.body.fname;
    currUser.phone = req.body.phone;
    res.render("account-page");
}
const port = 8080;
app.listen(port, () => {
    console.log(`listening on port: ${port} `)
})