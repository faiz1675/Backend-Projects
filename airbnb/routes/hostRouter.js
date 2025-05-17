const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/add-home",(req, res, next)=>{
    res.send(
        `<h1>Register your home here</h1>
        <form action="/host/add-home" method="POST">
        <input type="text" id="name" name="houseName" placeholder = "Enter the name of your Home"><br>
        <input type="submit">
    </form>`);
})

hostRouter.post("/host/add-home",(req, res, next)=>{
    console.log('req.body:=>',req.body);
    res.send(
        `<h1>Home Registered successfully</h1>
        <a href ="/">Go to Home</a>`);
})

module.exports = hostRouter;
