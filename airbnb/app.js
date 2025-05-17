//External Module
const expres = require('express');

//Local Module
const userRouter = require("./routes/userRouter");
const hostRouter = require('./routes/hostRouter');

const app = expres();

app.use(expres.urlencoded()); //body parser
app.use(userRouter);
app.use(hostRouter);


const PORT= 3000;
app.listen(PORT, ()=>{
    console.log('Server is running inside airbnb');
})