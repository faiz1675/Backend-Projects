//Core Moudle
const path = require('path');

//External Module
const express = require('express');
const hostRouter = express.Router();

//Local Module
const rootDir = require('../utils/pathUtil');

hostRouter.get("/add-home",(req, res, next)=>{
    res.render('addHome', { pageTitle:'Add Home', currentPage : 'addHome'});
})

const registeredHomes = [];
hostRouter.post("/add-home",(req, res, next)=>{
    console.log('req.body:=>',req.body);
    console.log('req.body.houseName:=>',req.body.houseName);
    registeredHomes.push({houseName : req.body.houseName, price : req.body.price, location : req.body.location, rating : req.body.rating, photoUrl : req.body.photoUrl});
    res.render('homeAdded', {pageTitle:'Registration success', currentPage : 'homeAdded'});
})

// module.exports = hostRouter;
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
