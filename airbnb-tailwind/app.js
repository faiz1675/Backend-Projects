//Core Module
const path = require('path');
//External Module
const expres = require('express');

//Local Module
const userRouter = require("./routes/userRouter");
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');

const app = expres();

//Setup ejs package
app.set('view engine', 'ejs');
app.set('views','views');

app.use(expres.urlencoded()); //body parser
app.use(userRouter);
app.use("/host",hostRouter);
app.use(expres.static(path.join(rootDir,'public')));

app.use((req, res, next)=>{
    res.status(404).render('404',{pageTitle:'Error',currentPage : 'error404'});
})

const PORT= 3000;
app.listen(PORT, ()=>{
    console.log('Server is running inside airbnb');
})