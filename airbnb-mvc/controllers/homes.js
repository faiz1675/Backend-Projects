const registeredHomes = [];

exports.getAddHome = (req, res, next)=>{
    res.render('addHome', { pageTitle:'Add Home', currentPage : 'addHome'});
};

exports.postAddHome = (req, res, next)=>{
    console.log('req.body:=>',req.body);
    // registeredHomes.push(req.body);
    registeredHomes.push({houseName : req.body.houseName, price : req.body.price, location : req.body.location, rating : req.body.rating, photoUrl : req.body.photoUrl});
    res.render('homeAdded', {pageTitle:'Registration success', currentPage : 'homeAdded'});
};

exports.getHomes = (req, res, next)=>{
    console.log('registeredHomes:=>',registeredHomes);
    res.render('home', {registeredHomes: registeredHomes, pageTitle:'airbnb Home', currentPage : 'Home'});
};